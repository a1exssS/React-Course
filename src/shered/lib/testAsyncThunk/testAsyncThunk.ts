import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider"

type ActionConstructor<Return, Arg, RejectedValue> =
   (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class testAsyncThunk<Return, Arg, RejectedValue> {
   dispatch: jest.MockedFn<any>;
   getState: () => StateSchema;
   actionCreator: ActionConstructor<Return, Arg, RejectedValue>

   constructor(actionCreator: ActionConstructor<Return, Arg, RejectedValue>) {
      this.actionCreator = actionCreator;
      this.dispatch = jest.fn()
      this.getState = jest.fn()
   }

   async callThunk(arg: Arg) {
      const action = this.actionCreator(arg)
      const result = await action(this.dispatch, this.getState, undefined)

      return result

   }

}