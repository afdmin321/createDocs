export interface CardSchema {
  id: string;
  nameFile: string;
  name: string;
  factoryNumber: string;
  length: number;
  width: number;
  height: number;
  noDocument: number;
  miniDoc: boolean;
  filePrimary: string | null;
  fileSecondary: string | null;
  fileSpec: string[] | null;
  otherFiles: string[] | null;
  number?: number;
  ageGroup?: string;
}
