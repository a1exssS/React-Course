import { StateSchema } from "app/providers/StoreProvider"
import { getIsLoading } from './getIsLoading'

describe('getLoginError', () => {
   test('should return true if loading', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            isLoading: true
         }
      }
      expect(getIsLoading(state as StateSchema)).toEqual(true)
   })
   test('should return false if loaded', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            isLoading: false
         }
      }
      expect(getIsLoading(state as StateSchema)).toEqual(false)
   })
   test('should return false by default', () => {
      const state: DeepPartial<StateSchema> = {

      }
      expect(getIsLoading(state as StateSchema)).toEqual(false)
   })
})