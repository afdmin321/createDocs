import archiver from 'archiver';
export default async (archive: archiver.Archiver, directory: string): Promise<archiver.Archiver> => {
    
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
        archive.directory(directory, false);
        archive.finalize()
 
    } catch (e) {
        throw new Error()
    }
    return archive
}