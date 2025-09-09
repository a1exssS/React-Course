import { Profile, ValidateProfileError } from "../../types/profileSchema";

export const validateProfileData = (profile?: Profile) => {
   if (!profile) {
      return [ValidateProfileError.NO_DATA]
   }
   const { age, firstname, username, lastname } = profile
   const errors: ValidateProfileError[] = []

   if (!firstname || !lastname) {
      errors.push(ValidateProfileError.INCORRECT_USER_DATA)
   }

   if (!age || !Number.isInteger(age)) {
      errors.push(ValidateProfileError.INCORRECT_AGE)
   }

   if (!username) {
      errors.push(ValidateProfileError.INCORRECT_USERNAME)
   }



   return errors

}