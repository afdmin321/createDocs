

import { NextFunction, Request, Response } from 'express'
import path from 'path';
import pdf from "html-pdf";

import ApiError from'../error/ApiError'
import fs from "fs-extra";
import archiver from'archiver';
import zipDocs from'../archive/archive'
import { templateTable } from '../template/templateTable';
import { Doc } from '../type/Doc';
import { miniDoc } from '../template/miniDoc';
class CreatedDocs {
    async created(req: Request, res: Response, next: NextFunction) {

        const createPdf = (pdfTemlate: any, namePdf: any) => {
            return new Promise((resolve, reject) => {
                pdf.create(pdfTemlate, {}).toFile(namePdf, (err: any, response: any) => {
                    resolve(response)
                    reject(err)
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
                const namePdf: string = path.resolve("pdf", `${dataFile.nameFile.replaceAll('"' , "'")}.pdf`)
                const template = dataFile.miniDoc ? miniDoc(dataFile) : templateTable(dataFile)
                const result: unknown = await createPdf(template, namePdf)
                console.log(result)
                
            }
            const archive = archiver('zip', { zlib: { level: 0 } });
            await zipDocs(archive, pdfDirectory)
            archive.pipe(res) 
    } catch(e: any) {
        console.log(e)
        return next(ApiError.internal(e))
    }
}

}

export default new CreatedDocs()