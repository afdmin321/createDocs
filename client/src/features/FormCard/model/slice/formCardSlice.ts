import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormCardSchema } from "../types/FormCardSchema";

const initialState: FormCardSchema = {
  filePrimary: null,
  fileSecondary: null,
  fileSpec: null,
  otherFiles: null,
  miniDoc: false,
  editDoc: false,
};

export const formCardSlice = createSlice({
  name: "formCard",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setNameFile: (state, action: PayloadAction<string>) => {
      state.nameFile = action.payload;
    },
    setFactoryNumber: (state, action: PayloadAction<string>) => {
      state.factoryNumber = action.payload;
    },
    setAgeGroup: (state, action: PayloadAction<string | undefined>) => {
      state.ageGroup = action.payload;
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    setNumber: (state, action: PayloadAction<number | undefined>) => {
      state.number = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setFilePrimary: (state, action: PayloadAction<string | null>) => {
      state.filePrimary = action.payload;
    },
    setFileSecondary: (state, action: PayloadAction<string | null>) => {
      state.fileSecondary = action.payload;
    },
    setFileSpec: (state, action: PayloadAction<string[] | null>) => {
      state.fileSpec = action.payload;
    },
    setOtherFiles: (state, action: PayloadAction<string[] | null>) => {
      state.otherFiles = action.payload;
    },
    setMiniDoc: (state, action: PayloadAction<boolean>) => {
      state.miniDoc = action.payload;
    },
    setEditDoc: (state, action: PayloadAction<boolean>) => {
      state.editDoc = action.payload;
    },
    reset: () => initialState,
  },
});
export const { actions: formCardActions } = formCardSlice;
export const { reducer: formCardReducer } = formCardSlice;
