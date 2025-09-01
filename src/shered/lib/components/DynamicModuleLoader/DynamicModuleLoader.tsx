import { Reducer } from "@reduxjs/toolkit";
import { reduxStoreWithManager, StateSchemaKeys } from "app/providers/StoreProvider";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
   [action in StateSchemaKeys]?: Reducer
}

interface DynamicModuleLoaderProps {
   children: React.ReactNode;
   reducers: ReducersList;
   removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (
   { children, reducers, removeAfterUnmount = true }: DynamicModuleLoaderProps
) => {
   const store = useStore() as reduxStoreWithManager;
   const dispatch = useDispatch()

   useEffect(() => {
      Object.entries(reducers).forEach(([action, reducer]) => {
         store.reducerManager.add(action as StateSchemaKeys, reducer);
         dispatch({ type: `@INIT ${action} reducer` })
      })

      return () => {
         if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([action]) => {
               store.reducerManager.remove(action as StateSchemaKeys)
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
