

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
            const dataFiles: any = req.body
            for (let i = 0; i < dataFiles.length; i++) {
                const dataFile: any = dataFiles[i]
                const namePdf: any = path.resolve("pdf", `${dataFile.nameFile.replaceAll('"' , "'")}.pdf`)
                console.log(namePdf)
                const result: any = await createPdf(templateTable(req.body[i]), namePdf.replaceAll())
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

module.exports = new CreatedDocs()