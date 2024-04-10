import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios from "axios";
import { getCards } from "entities/Cards/model/selectors/getCards";
// @ts-ignore
const jszip = require('jszip')

interface config {
    rejectValue: string;
    state: StateSchema;

}
export const downloadDocs = createAsyncThunk<any, void, config>(
    "login/loginByUsername",
    async (_, thunkAPi) => {
        const { rejectWithValue, getState } = thunkAPi;
        const docs = getCards(getState())
        try {
            const response = await axios.post("http://localhost:7777/created", docs, { responseType: 'blob' })

            if (!response) {
                throw new Error();
            }
            const zipBlob = await response.data;

            const zip = await jszip.loadAsync(zipBlob); // Manipulate the zip content if required 
            await zip.generateAsync({ type: 'blob' })
                .then((content: any) => {
                    const url = URL.createObjectURL(content);
                    const link = document.createElement('a');
                    link.href = url; link.download = 'filename.zip';
                    link.click();
                    URL.revokeObjectURL(url);
                });

        } catch (err) {
            return rejectWithValue("error");
        }
    }
);