import { CountryList } from "entities/Country";
import { CurrencyList } from "entities/Currency";


export interface Profile {
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
}