import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
   error: '',
   text: ''
}

export const addCommentFormSlice = createSlice({
   name: 'addCommentForm',
   initialState,
   reducers: {
      setText: (state, action: PayloadAction<string>) => {
         state.text = action.payload
      }
   },
   extraReducers: (builder) => {
      // builder
      //    .addCase(postComment.pending, (state) => {
      //       state.error = undefined;
      //       state.isLoading = true

      //    })
      //    .addCase(postComment.fulfilled, (state) => {
      //       state.text = '';
      //       state.error = undefined;
      //       state.isLoading = false
      //    })
      //    .addCase(postComment.rejected, (state, action) => {
      //       state.isLoading = false
      //       state.error = action.payload;
      //    })
   }
})

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice

export const { reducer: addCommentFormReducer } = addCommentFormSlice
