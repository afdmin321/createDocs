import archiver from 'archiver';
import { mainLogger } from '../logger';
export default async (archive: archiver.Archiver, directory: any, name: string): Promise<archiver.Archiver> => {
    
    archive.on('warning', function (err: any) {
        if (err.code === 'ENOENT') {
        
            // log warning
        } else {
            // throw error
          
            throw err;
        }
    });
    archive.on('error', function (err: any) {
        throw err;
    });
    try {
        archive.append(directory, {name});
 
    } catch (err) {
        mainLogger.debug(err)
        throw new Error()
    }
    return archive
}