import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { articleDetailsSchema } from "entities/Article";
import { counterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { loginSchema } from "features/AuthByUsername";
import { ScrollHandlerSchema } from "features/ScrollHandler";
import { ArticleDitailsCommentsSchema } from "pages/ArticlesDetailsPage";
import { ArticlePageSchema } from "pages/ArticlesPage";

export interface StateSchema {
   counter: counterSchema;
   user: UserSchema;
   scrollPosition: ScrollHandlerSchema

   login?: loginSchema;
   profile?: ProfileSchema;
   articleDetails?: articleDetailsSchema;
   ArticleDitailsComments?: ArticleDitailsCommentsSchema;
   addCommentForm?: AddCommentFormSchema;
   articlePage?: ArticlePageSchema;
}


export interface reducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKeys, reducer: Reducer) => void;
   remove: (key: StateSchemaKeys) => void;
}


export type StateSchemaKeys = keyof StateSchema

export interface reduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: reducerManager
}

export interface ThunkExtraArg {
   api: AxiosInstance,
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema;
}