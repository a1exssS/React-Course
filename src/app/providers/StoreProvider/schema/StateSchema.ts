import { counterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface CounterState {
   value: number;
}

export interface StateSchema {
   counter: counterSchema;
   user: UserSchema;
}