import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkConfig } from "app/providers/StoreProvider";
import axios from "axios";
import { getCards } from "entities/Cards/model/selectors/getCards";
import { getSetingDocumentData } from "entities/SetingDocuments/model/selectors/getSetingDocuments";
import { getUserAuthData } from "entities/User";

// @ts-ignore
const jszip = require("jszip");

interface config {
  rejectValue: string;
  state: StateSchema;
}
export const downloadDocs = createAsyncThunk<void, void, ThunkConfig<string>>(
  "login/loginByUsername",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const docs = getCards(getState());
    const { date, print } = getSetingDocumentData(getState());
    const data = {
      date,
      print,
      docs,
    };
    const user = getUserAuthData(getState());
    if (!user?.token) {
      throw new Error("Токен устарел");
    }
    try {
      const response = await extra.api.post<any>(`/created`, data, {
        responseType: "blob",
        headers: {
          Authorization: user?.token,
        },
      });

      if (!response) {
        throw new Error();
      }
      const zipBlob = await response.data;

      const zip = await jszip.loadAsync(zipBlob); // Manipulate the zip content if required
      await zip.generateAsync({ type: "blob" }).then((content: any) => {
        const url = URL.createObjectURL(content);
        const link = document.createElement("a");
        link.href = url;
        link.download = "filename.zip";
        link.click();
        URL.revokeObjectURL(url);
      });
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);
