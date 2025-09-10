import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Profile } from "../../types/profileSchema";

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
   'profile/fetchProfileData',
   async (profileId, { extra, rejectWithValue }) => {
      if (!profileId) {
         return rejectWithValue('error')
      }
      try {
         const response = await extra.api.get<Profile>('/profile/' + profileId)
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