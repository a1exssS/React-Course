import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Profile } from "../../types/profileSchema";
import { getForm } from "../../selectors/getForm/getForm";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
   'profile/updateProfileData',
   async (_, { extra, rejectWithValue, getState }) => {
      try {
         const formData = getForm(getState())

         const response = await extra.api.put<Profile>('/profile', formData)
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