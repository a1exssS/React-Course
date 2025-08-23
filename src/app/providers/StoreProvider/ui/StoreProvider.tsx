import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../schema/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps {
   children: React.ReactNode;
   initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {

   const store = createReduxStore(initialState as StateSchema)

   return (
      <Provider store={store}>
         {children}
      </Provider>
   )
}
