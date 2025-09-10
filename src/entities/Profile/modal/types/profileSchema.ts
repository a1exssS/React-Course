import { CountryList } from "entities/Country";
import { CurrencyList } from "entities/Currency";

export enum ValidateProfileError {
   INCORRECT_USER_DATA = 'Имя и фамилия обязательны',
   INCORRECT_AGE = 'Некоректный возраст',
   INCORRECT_USERNAME = 'Некоректный никнейм',

   NO_DATA = 'Информация не получена',
   SERVER_ERROR = 'Ошибка сервера D:'
}

export interface Profile {
   id?: string;
   firstname?: string,
   lastname?: string,
   age?: number,
   currency?: CurrencyList,
   country?: CountryList,
   city?: string,
   username?: string,
   avatar?: string;
}

export interface ProfileSchema {
   isLoading: boolean;
   readonly: boolean;
   form?: Profile;
   data?: Profile;
   error?: string;
   validateError?: ValidateProfileError[]
}