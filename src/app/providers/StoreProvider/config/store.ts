import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema, ThunkExtraArg } from '../schema/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shered/api/api'
import { To } from 'react-router-dom'
import { NavigateOptions } from 'storybook/internal/router'


export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
   navigate?: (to: To, options?: NavigateOptions) => void,
) {

   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
   }

   const extraArg: ThunkExtraArg = {
      api: $api,
      navigate
   }

   const reducerManager = createReducerManager(rootReducers)

   const store = configureStore({
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         thunk: {
            extraArgument: extraArg
         }
      })
   })

   // @ts-ignore
   store.reducerManager = reducerManager

   return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];