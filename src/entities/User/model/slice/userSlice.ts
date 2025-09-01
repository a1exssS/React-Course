import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/userSchema'
import { LOCAL_STORAGE_KEY } from 'shered/consts/localStorageKey'

// export interface userState {
//    value: number
// }

const initialState: UserSchema = {

}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setAuthUser: (state, action) => {
         state.authData = action.payload
      },
      initAuth: (state) => {

         const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '')
         if (user) {
            state.authData = user
         }
      },
      setLogout: (state) => {
         state.authData = undefined;
         localStorage.removeItem(LOCAL_STORAGE_KEY)
      }

   },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice
