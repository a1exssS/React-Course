import { userActions, userReducer } from "./userSlice"
import { User, UserSchema } from "../types/userSchema"

describe('userReducer', () => {
   test('should return initAuth', () => {
      const state: DeepPartial<User> = {
         id: '1',
         username: 'alex'
      }
      expect(userReducer(state as UserSchema, userActions.initAuth()))
         .toEqual({ id: '1', username: 'alex', _inited: true })
   })
   test('should return set auth', () => {
      const state: DeepPartial<UserSchema> = {

         authData: {
            id: '1',
            username: 'alex'
         }

      }
      expect(userReducer(state as UserSchema, userActions.setAuthUser({ id: '1', username: 'alex' })))
         .toEqual({
            authData: {
               id: '1',
               username: 'alex'
            }
         })
   })
   test('should return logout', () => {
      const state: DeepPartial<UserSchema> = {
         authData: {
            id: '1',
            username: 'alex'
         }
      }
      expect(userReducer(state as UserSchema, userActions.setLogout()))
         .toEqual({
            authData: undefined
         })
   })
})