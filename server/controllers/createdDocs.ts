import { NextFunction, Request, Response } from "express";
import pdf from "html-pdf";
import ApiError from "../error/ApiError";
import archiver from "archiver";
import { templatePassport } from "../template/templatePassport";
import { Doc } from "../type/Doc";
import { miniDoc } from "../template/miniDoc";
import { mainLogger } from "../logger";
import { factory } from "typescript";

class CreatedDocs {
  async created(req: Request, res: Response, next: NextFunction) {
    const archive = archiver("zip", { zlib: { level: 9 } });

    const createPdf = (pdfTemlate: string) => {
      return new Promise<Buffer>((resolve, reject) => {
        pdf.create(pdfTemlate).toBuffer((err: any, response: any) => {
          if (Buffer.isBuffer(response)) {
            resolve(response);
          } else {
            reject("no pdf in buffer");
          }
        });
      });
    };
    const createDoc = async (doc: Doc) => {
      let i = doc.number || 1;

      if (doc.miniDoc) {
        const name: string = `${doc.nameFile
          .trim()
          .replaceAll('"', "'")}${i}.pdf`;
        const template = miniDoc(doc);
        const result: Buffer = await createPdf(template);
        archive.append(result, { name });
      } else {
        while (i) {
          const name: string = `${doc.nameFile
            .trim()
            .replaceAll('"', "'")}.${i}.pdf`;
          const template = templatePassport({
            ...doc,
            number: i,
            factoryNumber: doc.factoryNumber + `.${i}`,
          });
          const result: Buffer = await createPdf(template);
          archive.append(result, { name });
          i--;
        }
      }
    };
    try {
      const { docs, date, print } = req.body;
      const dataFiles: Doc[] = docs.map((doc) => {
        return { ...doc, date, print };
      });
      for (let i = 0; i < dataFiles.length; i++) {
        const dataFile: Doc = dataFiles[i];
        await createDoc(dataFile);
      }
      archive.finalize();
      archive.pipe(res);
    } catch (e: any) {
      mainLogger.debug(e);
      return next(ApiError.internal(e));
    }
  }
}

export default new CreatedDocs();
