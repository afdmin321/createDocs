import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { setingDocumentsReducer } from "entities/SetingDocuments";
import { formCardReducer } from "features/FormCard";
import { cardsReducer } from "entities/Cards/model/slice/cardsSlice";
import { downloadDocsReduser } from "features/downloadDocs/model/slice/downloadDocsSlice";
import { UserReducer } from "entities/User/model/slice/UserSlice";
import { AuthByUsernameReducer } from "features/AuthByUsername/model/slice/AuthByUsernameSlice";
import { $api } from "shared/api/api";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    setingDocuments: setingDocumentsReducer,
    formCard: formCardReducer,
    cards: cardsReducer,
    downloadDocs: downloadDocsReduser,
    user: UserReducer,
    authByUsername: AuthByUsernameReducer,
  };
  const extraArg: ThunkExtraArg = {
    api: $api,
  };
  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
