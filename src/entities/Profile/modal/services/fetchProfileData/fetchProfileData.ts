import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Profile } from "../../types/profileSchema";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
   'profile/fetchProfileData',
   async (_, { dispatch, extra, rejectWithValue }) => {
      try {
         const response = await extra.api.get<Profile>('/profile')
         if (!response.data) {
            throw new Error()
         }
         return response.data
      } catch (e) {
         console.log(e)
         return rejectWithValue(`Вы ввели неверный логин или пароль`)
      }
   },
)