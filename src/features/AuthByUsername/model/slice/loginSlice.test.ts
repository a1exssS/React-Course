import { DeepPartial } from "@reduxjs/toolkit"
import { loginSchema } from "../types/loginSchema"
import { loginActions, loginReducer } from "./loginSlice"

describe('loginSlice', () => {
   test('set username', () => {
      const state: DeepPartial<loginSchema> = {
         username: '123'
      }
      expect(
         loginReducer(state as loginSchema, loginActions.setUsername('123'))
      ).toEqual({ username: '123' })
   })
   test('set password', () => {
      const state: DeepPartial<loginSchema> = {
         password: '123'
      }
      expect(
         loginReducer(state as loginSchema, loginActions.setPassword('123'))
      ).toEqual({ username: '123' })
   })
})