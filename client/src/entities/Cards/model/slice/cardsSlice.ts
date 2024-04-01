import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardSchema } from "entities/Card/model/types/CardSchema";

const initialState: CardSchema[] = []
export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<CardSchema>) => {
            const newState = [...state, action.payload]
            return newState
        },
        editCard: (state, action: PayloadAction<CardSchema>) => {
            const newState = [...state.filter(card => card.id === action.payload.id), action.payload]
            return newState
        }
        ,
        deleteCard: (state, action: PayloadAction<string>) => {
            const newState = [...state.filter(card => card.id === action.payload)]
            return newState
        }
        ,
        reset: () => {
            return initialState
        }
    }
})
export const { actions: cardsActions } = cardsSlice
export const { reducer: cardsReducer } = cardsSlice