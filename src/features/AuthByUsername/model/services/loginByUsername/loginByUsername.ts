import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_KEY } from "shered/consts/localStorageKey";

interface LoginByUsernameProps {
   username: string;
   password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
   'users/fetchByIdStatus',
   async (authData, { dispatch, extra, rejectWithValue }) => {
      try {
         const response = await extra.api.post('/login', authData)

         if (!response.data) {
            throw new Error()
         }

         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.data))
         dispatch(userActions.setAuthUser(response.data))

         return response.data

      } catch (e) {
         console.log(e)
         return rejectWithValue(`Вы ввели неверный логин или пароль`)
      }
   },
)