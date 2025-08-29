import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { counterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { loginSchema } from "features/AuthByUsername";

export interface CounterState {
   value: number;
}

export interface StateSchema {
   counter: counterSchema;
   user: UserSchema;
   login?: loginSchema;
   profile?: ProfileSchema;
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

