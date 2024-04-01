import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DownloadDocs } from "../types/DownloadDocs";
import { downloadDocs } from "../services/dowmloadDocs";
const initialState: DownloadDocs = {
    isLoading: false,
    error: "",
    docs: null
}
const downloadDocsSlice = createSlice({
    name: "downloadDocs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(downloadDocs.pending, (state) => {
                state.error = "";
                state.isLoading = true;
            })
            .addCase(downloadDocs.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(downloadDocs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
})
export const { actions: downloadDocsActions } = downloadDocsSlice
export const { reducer: downloadDocsReduser } = downloadDocsSlice