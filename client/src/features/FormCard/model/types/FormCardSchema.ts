export interface FormCardSchema {
  miniDoc: boolean;
  editDoc: boolean;
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
  isLoading?: boolean;
  error?: string;
}
