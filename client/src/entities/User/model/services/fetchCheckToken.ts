import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User } from "entities/User/model/types/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

import { UserActions } from "entities/User/model/slice/UserSlice";
import { getUserAuthData } from "../selectors/UserSelector";

export const fetchCheckToken = createAsyncThunk<any, void, ThunkConfig<string>>(
  "authByUsername",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi;
    const user = getUserAuthData(getState());
    if (!user?.token) {
      throw new Error("token not found");
    }
    try {
      const respons = await extra.api.get<User>(`/trotling`, {
        headers: {
          Authorization: user?.token,
        },
      });
      if (!respons.data) {
        throw new Error();
      }
      console.log(respons.data);
      return respons.data;
    } catch (err) {
      dispatch(UserActions.logout());
      return rejectWithValue("Не верный логин или пароль!");
    }
  }
);
