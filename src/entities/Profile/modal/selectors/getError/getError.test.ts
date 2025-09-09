import { StateSchema } from "app/providers/StoreProvider"
import { getError } from "./getError"

describe('getError', () => {
   test('should return errror', () => {
      const state: DeepPartial<StateSchema> = {
         profile: { error: 'error' }
      }
      expect(getError(state as StateSchema)).toEqual('error')
   })
   test('should return empty state', () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getError(state as StateSchema)).toEqual('')
   })
})