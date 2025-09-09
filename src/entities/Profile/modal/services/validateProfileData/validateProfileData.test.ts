import { validateProfileData } from "./validateProfileData"
import { ValidateProfileError } from "../../types/profileSchema"
import { CountryList } from "entities/Country"
import { CurrencyList } from "entities/Currency"

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

describe('validateProfileData', () => {
   test('should return no errors', () => {
      expect(validateProfileData(data)).toEqual([])
   })
   test('should return error firstname', () => {
      expect(validateProfileData({ ...data, firstname: '' }))
         .toEqual([ValidateProfileError.INCORRECT_USER_DATA])
   })
   test('should return error lastname', () => {
      expect(validateProfileData({ ...data, lastname: '' }))
         .toEqual([ValidateProfileError.INCORRECT_USER_DATA])
   })
   test('should return error age', () => {
      expect(validateProfileData({ ...data, age: NaN }))
         .toEqual([ValidateProfileError.INCORRECT_AGE])
   })
   test('should return error username', () => {
      expect(validateProfileData({ ...data, username: '' }))
         .toEqual([ValidateProfileError.INCORRECT_USERNAME])
   })
   test('should return all errors', () => {
      expect(validateProfileData({}))
         .toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USERNAME
         ])
   })
})