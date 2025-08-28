import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_KEY } from "shered/consts/localStorageKey";

interface LoginByUsernameProps {
   username: string;
   password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
   'users/fetchByIdStatus',
   async (authData, thunkAPI) => {
      try {
         const response = await axios.post('http://localhost:8000/login', authData)

         if (!response.data) {
            throw new Error()
         }

         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.data))
         thunkAPI.dispatch(userActions.setAuthUser(response.data))

         return response.data

      } catch (e) {
         console.log(e)
         return thunkAPI.rejectWithValue(`Вы ввели неверный логин или пароль`)
      }
   },
)