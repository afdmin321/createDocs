export interface FormCardSchema {
    name?: string;
    factoryNumber?: string;
    length?: number;
    width?: number;
    heigth?: number;
    filePrimary?: string | null;
    fileSecondary?: string | null; 
    fileSpec?: string[] | null;
    otherFiles?: string[] | null; 
    isLoading?: boolean;
    error?: string;

}