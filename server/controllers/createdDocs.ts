

import { NextFunction, Request, Response } from 'express'
import path from 'path';
const pdf = require('html-pdf');
const ApiError = require('../error/ApiError')
const fs = require('fs-extra');
const archiver = require('archiver');
const zipDocs = require('../archive/archive')
import { templateTable } from '../template/templateTable';
class CreatedDocs {
    async created(req: Request, res: Response, next: NextFunction) {
        const template: any = ({ factoryNumber, filePrimary }: any) => `
        <!doctype html>
        <html>
           <head>
              <meta charset="utf-8">
              <title>PDF Result Template</title>
            </head>
            <body>
             <div>${factoryNumber}<div/>
             <img src="${filePrimary}" style="width: 100px; height: 100px"/>
            </body>
        </html>
        `
        
        const createPdf = (pdfTemlate: any, namePdf: any) => {
            return new Promise((resolve, reject) => {
                pdf.create(pdfTemlate, {}).toFile(namePdf, (err: any, response: any) => {
                    resolve(response)
                    reject(err)
                });
            })
        }

        const pdfDirectory = path.resolve("pdf")
        fs.removeSync(pdfDirectory); 
        try {
            const dataFiles: any = req.body
            for (let i = 0; i < dataFiles.length; i++) {
                const dataFile: any = dataFiles[i]
                const pdfTemlate: any = template(dataFile)
                const namePdf: any = path.resolve("pdf", `${dataFile.nameFile}.pdf`)
                const result: any = await createPdf(templateTable(), namePdf)
                console.log(result)
            }
            const outputZip = fs.createWriteStream(pdfDirectory + "/docs.zip")
            const archive = archiver('zip', { zlib: { level: 9 } });
            outputZip.on('close', function () {
                res.setHeader('Content-disposition', 'attachment; filename=docs.zip');
                res.download(path.resolve("pdf", "docs.zip"));
            });
            archive.pipe(outputZip)
            await zipDocs(archive, pdfDirectory)

            return;
        } catch (e: any) {
            console.log(e)
            return next(ApiError.internal(e))
        }
    }

}

module.exports = new CreatedDocs()