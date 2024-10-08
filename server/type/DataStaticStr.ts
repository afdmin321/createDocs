export interface DataStaticStr {
  name: string;
  factoryNumber: string;
  noDocument: number;
  width: number;
  height: number;
  length: number;
  date: string;
  year: string;
  currentDopPages: number;
  allPages: number;
  dateFormatMonthText: string;
  printOne: string;
  printTwo: string;
  printThree: string;
  filePrimary: string | null;
  otherFiles: string[] | null;
  number?: number;
  ageGroup?: string;
}
