import { StateSchema } from "app/providers/StoreProvider"
import { getIsLoading } from "./getIsLoading"

describe('getIsLoading', () => {
   test('should return true is loading', () => {
      const state: DeepPartial<StateSchema> = {
         profile: { isLoading: true }
      }
      expect(getIsLoading(state as StateSchema)).toEqual(true)
   })
   test('should return false is loading', () => {
      const state: DeepPartial<StateSchema> = {
         profile: { isLoading: false }
      }
      expect(getIsLoading(state as StateSchema)).toEqual(false)
   })
   test('should return empty state', () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getIsLoading(state as StateSchema)).toEqual(false)
   })
})