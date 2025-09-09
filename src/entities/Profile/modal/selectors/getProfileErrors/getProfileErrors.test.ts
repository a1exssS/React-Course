import { StateSchema } from "app/providers/StoreProvider"
import { getProfileErrors } from "./getProfileErrors"
import { ValidateProfileError } from "../../types/profileSchema"

describe('getProfileErrors', () => {
   test('should return errrors', () => {
      const state: DeepPartial<StateSchema> = {
         profile: {
            validateError: [ValidateProfileError.INCORRECT_AGE]
         }
      }
      expect(getProfileErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE])
   })
   test('should return empty state', () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getProfileErrors(state as StateSchema)).toEqual(undefined)
   })
})