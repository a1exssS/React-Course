import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
   'articleList/fetchArticlesList',
   async (_, { extra, rejectWithValue }) => {

      try {
         const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
               _expand: 'user'
            }
         })

         if (!response.data) {
            throw new Error()
         }
         return response.data
      } catch (e) {
         return rejectWithValue(`Вы ввели неверный логин или пароль`)
      }
   },
)