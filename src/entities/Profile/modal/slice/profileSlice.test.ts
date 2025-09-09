import { CountryList } from "entities/Country"
import { ProfileSchema, ValidateProfileError } from "../types/profileSchema"
import { profileActions, profileReducer } from "./profileSlice"
import { CurrencyList } from "entities/Currency"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"

const data = {
   age: 20,
   avatar: "https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-",
   city: "asdf",
   country: CountryList.Russia,
   currency: CurrencyList.USD,
   firstname: 'alex',
   lastname: 'volkov',
   username: 'a1exssio'
}

describe('loginSlice', () => {
   test('set readonly', () => {
      const state: DeepPartial<ProfileSchema> = {

      }
      expect(
         profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
      ).toEqual({ readonly: true })
   })
   test('set form cansle', () => {
      const state: DeepPartial<ProfileSchema> = {
         form: { ...data, lastname: '' },
         data: data
      }
      expect(
         profileReducer(state as ProfileSchema, profileActions.setCancelEddit())
      ).toEqual({ data, readonly: true, validateErrors: undefined, form: data })
   })
   test('set form update', () => {
      const state: DeepPartial<ProfileSchema> = {
         form: { username: '123' }
      }
      expect(
         profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123123' }))
      ).toEqual({ form: { username: '123123' } })
   })
   test('update profile service pending', () => {
      const state: DeepPartial<ProfileSchema> = {
         isLoading: false,
         validateError: [ValidateProfileError.INCORRECT_AGE]
      }
      expect(
         profileReducer(state as ProfileSchema, updateProfileData.pending)
      ).toEqual({ isLoading: true, validateError: undefined })
   })
   test('update profile service fullfiled', () => {
      const state: DeepPartial<ProfileSchema> = {
         isLoading: true,
         validateError: [ValidateProfileError.INCORRECT_AGE],
         readonly: false,
         data: data,
         form: data
      }
      expect(
         profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))
      ).toEqual({ isLoading: false, validateError: undefined, readonly: true, data, form: data })
   })
})