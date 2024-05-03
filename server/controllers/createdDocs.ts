import { NextFunction, Request, Response } from 'express'
import path from 'path';
import pdf from "html-pdf";

import ApiError from '../error/ApiError'
import fs from "fs-extra";
import archiver from 'archiver';
import zipDocs from '../archive/archive'
import { templatePassport } from '../template/templatePassport';
import { Doc } from '../type/Doc';
import { miniDoc } from '../template/miniDoc';
import { mainLogger } from '../logger';


class CreatedDocs {
    async created(req: Request, res: Response, next: NextFunction) {
        const archive = archiver('zip', { zlib: { level: 9 } });
        const createPdf = (pdfTemlate: string) => {
            return new Promise((resolve, reject) => {
                pdf.create(pdfTemlate).toBuffer((err: any, response: any) => {
                    if (Buffer.isBuffer(response)) {
                        resolve(response)
                    } else {
                        reject("no pdf in buffer")
                    }

                });
            })
        }

        const pdfDirectory = path.resolve("pdf")
        if (pdfDirectory) {
            fs.removeSync(pdfDirectory);
        }
        try {
            const dataFiles: Doc[] = req.body
            for (let i = 0; i < dataFiles.length; i++) {
                const dataFile: Doc = dataFiles[i]
                const namePdf: string = `${dataFile.nameFile.replaceAll('"', "'")}.pdf`
                const template = dataFile.miniDoc ? miniDoc(dataFile) : templatePassport(dataFile)
                const result: unknown = await createPdf(template)
                await zipDocs(archive, result, namePdf)
            }
            archive.finalize()
            archive.pipe(res)
        } catch (e: any) {
            mainLogger.debug(e)
            return next(ApiError.internal(e))
        }
    }

}

export default new CreatedDocs()