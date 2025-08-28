import { counterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { loginSchema } from "features/AuthByUsername";

export interface CounterState {
   value: number;
}

export interface StateSchema {
   counter: counterSchema;
   user: UserSchema;
   login?: loginSchema
}