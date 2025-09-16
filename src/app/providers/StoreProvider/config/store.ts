import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema, ThunkExtraArg } from '../schema/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shered/api/api'
import { scrollHandlerReducer } from 'features/ScrollHandler'


export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
) {

   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
      scrollPosition: scrollHandlerReducer
   }

   const extraArg: ThunkExtraArg = {
      api: $api,
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