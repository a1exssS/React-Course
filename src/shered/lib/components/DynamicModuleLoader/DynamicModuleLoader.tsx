import { Reducer } from "@reduxjs/toolkit";
import { reduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKeys } from "app/providers/StoreProvider/schema/StateSchema";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
   [action in StateSchemaKeys]?: Reducer
}

type ReducersListEntry = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
   children: React.ReactNode;
   reducers: ReducersList;
   removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({ children, reducers, removeAfterUnmount = true }: DynamicModuleLoaderProps) => {
   const store = useStore() as reduxStoreWithManager;
   const dispatch = useDispatch()

   useEffect(() => {
      Object.entries(reducers).forEach(([action, reducer]: ReducersListEntry) => {
         store.reducerManager.add(action, reducer);
         dispatch({ type: `@INIT ${action} reducer` })
      })

      return () => {
         if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([action]: ReducersListEntry) => {
               store.reducerManager.remove(action)
               dispatch({ type: `@REMOVE ${action} reducer` })
            })
         }
      }
      // eslint-disable-next-line
   }, [])

   return (
      <>{children}</>
   )
}
