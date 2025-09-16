import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollHandlerSchema } from '../types/ScrollHandlerSchema'

const initialState: ScrollHandlerSchema = {
   scroll: {}
}

export const scrollHandler = createSlice({
   name: 'ScrollHandlerSchema',
   initialState,
   reducers: {
      setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
         state.scroll[payload.path] = payload.position;
      }
   },

})

// Action creators are generated for each case reducer function
export const { actions: scrollHandlerActions } = scrollHandler

export const { reducer: scrollHandlerReducer } = scrollHandler
