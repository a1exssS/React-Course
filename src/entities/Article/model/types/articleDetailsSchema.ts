import { Article } from "./article";

export interface articleDetailsSchema {
   isLoading: boolean;
   data?: Article;
   error?: string;
}