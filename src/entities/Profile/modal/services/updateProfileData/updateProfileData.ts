import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Profile, ValidateProfileError } from "../../types/profileSchema";
import { getForm } from "../../selectors/getForm/getForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
   'profile/updateProfileData',
   async (_, { extra, rejectWithValue, getState }) => {
      try {
         const formData = getForm(getState())

         const errors = validateProfileData(formData)

         if (errors.length) {
            return rejectWithValue(errors)
         }

         const response = await extra.api.put<Profile>('/profile/' + formData?.id, formData)

         if (!response.data) {
            throw new Error()
         }

         return response.data
      } catch (e) {
         console.log(e)
         return rejectWithValue([ValidateProfileError.SERVER_ERROR])
      }
   },
)