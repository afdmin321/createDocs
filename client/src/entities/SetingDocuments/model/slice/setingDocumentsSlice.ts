import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SetingDocumentsSchema } from "../types/SetingDocumentsSchema";
import useDate from "shared/lib/hooks/useDate/useDate";
import { DATE_LS, NO_DOCUMENTA_LS, NO_ORDER_LS } from "shared/const/const";


const { curentDate } = useDate()

const initialState: SetingDocumentsSchema = {
    date: curentDate,
    print: false
}

export const setingDocumentsSlice = createSlice({
    name: 'setingDocuments',
    initialState,
    reducers: {
        editNoOrder: (state, action: PayloadAction<number | undefined>) => {
            state.noOrder = action.payload
            localStorage.setItem(NO_ORDER_LS, String(action.payload))
        },
        editNoDocument: (state, action: PayloadAction<number | undefined>) => {
            state.noDocument = action.payload
            localStorage.setItem(NO_DOCUMENTA_LS, String(action.payload))
        },
        editDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
            localStorage.setItem(DATE_LS, action.payload)
        },
        editPrint: (state, action: PayloadAction<boolean>) => {
            state.print = action.payload
        },
        reset: () => {
            return initialState
        }
    }
})

export const { actions: setingDocumentsActions } = setingDocumentsSlice
export const { reducer: setingDocumentsReducer } = setingDocumentsSlice