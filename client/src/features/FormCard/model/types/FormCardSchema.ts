export interface FormCardSchema {
  miniDoc: boolean;
  editDoc: boolean;
  number?: number;
  id?: string;
  name?: string;
  nameFile?: string;
  factoryNumber?: string;
  length?: number;
  width?: number;
  height?: number;
  filePrimary?: string | null;
  fileSecondary?: string | null;
  fileSpec?: string[] | null;
  otherFiles?: string[] | null;
  ageGroup?: string;
  isLoading?: boolean;
  error?: string;
}
