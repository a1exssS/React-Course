import { StateSchema } from "app/providers/StoreProvider"
import { getPassword } from './getPassword'

describe('getLoginError', () => {
   test('should return password text', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            password: 'password'
         }
      }
      expect(getPassword(state as StateSchema)).toEqual('password')
   })
   test('should return undefined string', () => {
      const state: DeepPartial<StateSchema> = {

      }
      expect(getPassword(state as StateSchema)).toEqual('')
   })

})