export interface Doc {
  id: string;
  nameFile: string;
  name: string;
  factoryNumber: string;
  length: number;
  width: number;
  height: number;
  date: string;
  noDocument: number;
  miniDoc: boolean;
  print: boolean;
  filePrimary: string | null;
  fileSecondary: string | null;
  fileSpec: string[] | null;
  otherFiles: string[] | null;
  number?: number;
  ageGroup?: string;
}
