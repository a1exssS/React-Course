import { StateSchema } from "app/providers/StoreProvider"
import { getUsername } from './getUsername'

describe('getLoginError', () => {
   test('should return username text', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            username: 'username'
         }
      }
      expect(getUsername(state as StateSchema)).toEqual('username')
   })
   test('should return undefined string', () => {
      const state: DeepPartial<StateSchema> = {

      }
      expect(getUsername(state as StateSchema)).toEqual('')
   })

})