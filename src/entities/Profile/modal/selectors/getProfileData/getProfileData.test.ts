import { StateSchema } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { CountryList } from "entities/Country"
import { CurrencyList } from "entities/Currency"

describe('getProfileData', () => {
   test('should return data', () => {
      const data = {
         age: 20,
         avatar: "https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-",
         city: "asdf",
         country: CountryList.Russia,
         currency: CurrencyList.USD,
         firstname: 'alex',
         lastname: 'volkov',
         username: 'a1exssio'
      }
      const state: DeepPartial<StateSchema> = {
         profile: {
            data
         }
      }
      expect(getProfileData(state as StateSchema)).toEqual(data)
   })
   test('should return empty state', () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getProfileData(state as StateSchema)).toEqual(undefined)
   })
})