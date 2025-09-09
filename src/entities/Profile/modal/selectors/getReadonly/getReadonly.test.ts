import { StateSchema } from "app/providers/StoreProvider"
import { getReadonly } from "./getReadonly"

describe('getReadonly', () => {
   test('should return readonly true', () => {
      const state: DeepPartial<StateSchema> = {
         profile: { readonly: true }
      }
      expect(getReadonly(state as StateSchema)).toEqual(true)
   })
   test('should return readonly false', () => {
      const state: DeepPartial<StateSchema> = {
         profile: { readonly: false }
      }
      expect(getReadonly(state as StateSchema)).toEqual(false)
   })
   test('should return empty state', () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getReadonly(state as StateSchema)).toEqual(false)
   })
})