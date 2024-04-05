export interface Doc {
        id: string;
        nameFile: string;
        name: string;
        factoryNumber: string;
        length: number;
        width: number;
        heigth: number;
        date: string;
        noDocument: number;
        miniDoc: boolean
        filePrimary: string | null;
        fileSecondary: string | null; 
        fileSpec: string | null;
        otherFiles: string[] | null; 
    
}