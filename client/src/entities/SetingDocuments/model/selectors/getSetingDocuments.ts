import { StateSchema } from "app/providers/StoreProvider";
export const getSetingDocumentData = (state: StateSchema) => state.setingDocuments
export const getNoOrder = (state: StateSchema) => state.setingDocuments.noOrder
export const getNoDocument = (state: StateSchema) => state.setingDocuments.noDocument
export const getDate = (state: StateSchema) => state.setingDocuments.date
export const getPrint = (state: StateSchema) => state.setingDocuments.print