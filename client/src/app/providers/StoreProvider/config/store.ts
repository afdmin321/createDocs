import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { setingDocumentsReducer } from "entities/SetingDocuments";
import { formCardReducer } from "features/FormCard";
import { cardsReducer } from "entities/Cards/model/slice/cardsSlice";
import { downloadDocsReduser } from "features/downloadDocs/model/slice/downloadDocsSlice";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = { setingDocuments: setingDocumentsReducer, formCard: formCardReducer, cards: cardsReducer, downloadDocs: downloadDocsReduser }
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]