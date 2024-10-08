import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CardSchema } from "entities/Card/model/types/CardSchema";
import { SetingDocumentsSchema } from "entities/SetingDocuments";
import { UserSchema } from "entities/User/model/types/User";
import { AuthByUsernameSchema } from "features/AuthByUsername";
import { FormCardSchema } from "features/FormCard/model/types/FormCardSchema";
import { DownloadDocs } from "features/downloadDocs";

export interface StateSchema {
  user: UserSchema;
  authByUsername: AuthByUsernameSchema;
  setingDocuments: SetingDocumentsSchema;
  formCard: FormCardSchema;
  cards: CardSchema[];
  downloadDocs: DownloadDocs;
}
export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
