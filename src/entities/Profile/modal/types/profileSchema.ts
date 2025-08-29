import { CountryList, CurrencyList } from "shered/consts/common";


export interface Profile {
   firstname: string,
   lastname: string,
   age: number,
   currency: CurrencyList,
   country: CountryList,
   city: string,
   username: string,
   avatar: string;
}

export interface ProfileSchema {
   isLoading: boolean;
   readonly: boolean;
   data?: Profile;
   error?: string;
}