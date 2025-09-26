import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Article } from "entities/Article";

export const fetchArticleRecomendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
   'articleDedailsRecomendations/fetchArticleRecomendations',
   async (_, { extra, rejectWithValue }) => {

      try {
         const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
               _limit: 4,
            }
         })

         if (!response.data) {
            throw new Error()
         }
         return response.data
      } catch (e) {
         return rejectWithValue(`error`)
      }
   },
)