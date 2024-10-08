import { StateSchema } from "app/providers/StoreProvider";

export const getFormData = (state: StateSchema) => state.formCard
export const getId = (state: StateSchema) => state.formCard.id
export const getFormCardName = (state: StateSchema) => state.formCard.name
export const getFormCardFactoryNumber = (state: StateSchema) => state.formCard.factoryNumber
export const getFormCardHeight = (state: StateSchema) => state.formCard.height
export const getFormCardWidth = (state: StateSchema) => state.formCard.width
export const getFormCardLength = (state: StateSchema) => state.formCard.length
export const getFormCardNumber = (state: StateSchema) => state.formCard.number
export const getFormCardFilePrimary = (state: StateSchema) => state.formCard.filePrimary
export const getFormCardFileSecondary = (state: StateSchema) => state.formCard.fileSecondary
export const getFormCardFileSpec = (state: StateSchema) => state.formCard.fileSpec
export const getFormCardOtherFiles = (state: StateSchema) => state.formCard.otherFiles
export const getFormCardIsLoading = (state: StateSchema) => state.formCard.isLoading
export const getFormCardError = (state: StateSchema) => state.formCard.error
export const getMiniDoc = (state: StateSchema) => state.formCard.miniDoc