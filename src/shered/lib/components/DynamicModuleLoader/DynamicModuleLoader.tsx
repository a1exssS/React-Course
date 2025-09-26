import { Reducer } from "@reduxjs/toolkit";
import { reduxStoreWithManager, StateSchema, StateSchemaKeys } from "app/providers/StoreProvider";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
   [action in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[action]>>
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
      const mountedReducers = store.reducerManager.getReducerMap()
      Object.entries(reducers).forEach(([name, reducer]) => {
         const mounted = mountedReducers[name as StateSchemaKeys];
         if (!mounted) {
            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${name} reducer` })
         }
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
