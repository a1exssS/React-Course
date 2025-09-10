import { articleDetailsData, articleDetailsIsLoading, articleDetailsError } from "./articleDetails"
import { StateSchema } from "app/providers/StoreProvider"

describe('articleDetails', () => {
   test("return data", () => {
      const data = {
         id: '1',
         title: 'title'
      }
      const state: DeepPartial<StateSchema> = {
         articleDetails: { data }
      }

      expect(articleDetailsData(state as StateSchema)).toEqual(data)
   })
   test("return isLoading", () => {
      const state: DeepPartial<StateSchema> = {
         articleDetails: { isLoading: true }
      }

      expect(articleDetailsIsLoading(state as StateSchema)).toEqual(true)
   })
   test("return error", () => {
      const state: DeepPartial<StateSchema> = {
         articleDetails: { error: 'error' }
      }

      expect(articleDetailsError(state as StateSchema)).toEqual('error')
   })
   test("return empty data", () => {
      const data = {}
      const state: DeepPartial<StateSchema> = {
         articleDetails: { data }
      }

      expect(articleDetailsData(state as StateSchema)).toEqual({})
   })
   test("return isLoading false", () => {
      const state: DeepPartial<StateSchema> = {
      }

      expect(articleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
   })
   test("return error empty", () => {
      const state: DeepPartial<StateSchema> = {
      }

      expect(articleDetailsError(state as StateSchema)).toEqual(expect(articleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
      )
   })
})