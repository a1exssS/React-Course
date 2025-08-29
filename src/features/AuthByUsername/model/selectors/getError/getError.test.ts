import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getError } from './getError'

describe('getLoginError', () => {
   test('should return error', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            error: 'error'
         }
      }
      expect(getError(state as StateSchema)).toEqual('error')
   })
   test('should return undefined', () => {
      const state: DeepPartial<StateSchema> = {

      }
      expect(getError(state as StateSchema)).toEqual('')
   })
})