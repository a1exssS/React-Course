import { createSlice } from '@reduxjs/toolkit'
import { loginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

export interface loginState {
   value: string;
}

const initialState: loginSchema = {
   isLoading: false,
   password: '',
   username: ''
}

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      setUsername: (state, action) => {
         state.username = action.payload
      },
      setPassword: (state, action) => {
         state.password = action.payload
      }

   },
   extraReducers: (builder) => {
      builder
         .addCase(loginByUsername.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
         })
   }
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice

export const { reducer: loginReducer } = loginSlice
