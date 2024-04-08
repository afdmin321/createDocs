import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormCardSchema } from "../types/FormCardSchema";

const initialState: FormCardSchema = {
    filePrimary: null,
    fileSecondary: null,
    fileSpec: null,
    otherFiles: null,
}

export const formCardSlice = createSlice({
    name: "formCard",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setFactoryNumber: (state, action: PayloadAction<string>) => {
            state.factoryNumber = action.payload
        },
        setLength: (state, action: PayloadAction<number>) => {
            state.length = action.payload
        },
        setWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload
        },
        setHeigth: (state, action: PayloadAction<number>) => {
            state.heigth = action.payload
        },
        setFilePrimary: (state, action: PayloadAction<string | null>) => {
            console.log(action.payload)
            state.filePrimary = action.payload
        },
        setFileSecondary: (state, action: PayloadAction<string | null>) => {
            state.fileSecondary = action.payload
        },
        setFileSpec: (state, action: PayloadAction<string[] | null>) => {
            state.fileSpec = action.payload
        },
        setOtherFiles: (state, action: PayloadAction<string[] | null>) => {
            state.otherFiles = action.payload
        },
        reset: () => initialState
    },

})
export const { actions: formCardActions } = formCardSlice
export const { reducer: formCardReducer } = formCardSlice