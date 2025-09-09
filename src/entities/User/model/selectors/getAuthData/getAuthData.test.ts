import { StateSchema } from "app/providers/StoreProvider"
import { getAuthData } from "./getAuthData"

describe('getAuthData', () => {
   test('should return errror', () => {
      const state: DeepPartial<StateSchema> = {
         user: { authData: { id: '1', username: 'alex' } }
      }
      expect(getAuthData(state as StateSchema)).toEqual({ id: '1', username: 'alex' })
   })
   test('should return empty state', () => {
      const state: DeepPartial<StateSchema> = {
         user: {}
      }
      expect(getAuthData(state as StateSchema)).toEqual(undefined)
   })
})