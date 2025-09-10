import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { articleDetailsSchema } from "entities/Article";
import { counterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { loginSchema } from "features/AuthByUsername";
import { ArticleDitailsCommentsSchema } from "pages/ArticlesDetailsPage";
import { To } from "react-router-dom";
import { NavigateOptions } from "storybook/internal/router";

export interface StateSchema {
   counter: counterSchema;
   user: UserSchema;
   login?: loginSchema;
   profile?: ProfileSchema;
   articleDetails?: articleDetailsSchema;
   ArticleDitailsComments?: ArticleDitailsCommentsSchema;
   addCommentForm?: AddCommentFormSchema;
}

export interface reducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKeys, reducer: Reducer) => void;
   remove: (key: StateSchemaKeys) => void
}


export type StateSchemaKeys = keyof StateSchema

export interface reduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: reducerManager
}

export interface ThunkExtraArg {
   api: AxiosInstance,
   navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema;
}