import { StateSchema } from "app/providers/StoreProvider";

export const getFormData = (state: StateSchema) => state.formCard
export const getFormCardName = (state: StateSchema) => state.formCard.name
export const getFormCardFactoryNumber = (state: StateSchema) => state.formCard.factoryNumber
export const getFormCardHeigth = (state: StateSchema) => state.formCard.heigth
export const getFormCardWidth = (state: StateSchema) => state.formCard.width
export const getFormCardLength = (state: StateSchema) => state.formCard.length
export const getFormCardFilePrimary = (state: StateSchema) => state.formCard.filePrimary
export const getFormCardFileSecondary = (state: StateSchema) => state.formCard.fileSecondary
export const getFormCardFileSpec = (state: StateSchema) => state.formCard.fileSpec
export const getFormCardOtherFiles = (state: StateSchema) => state.formCard.otherFiles
export const getFormCardIsLoading = (state: StateSchema) => state.formCard.isLoading
export const getFormCardError = (state: StateSchema) => state.formCard.error