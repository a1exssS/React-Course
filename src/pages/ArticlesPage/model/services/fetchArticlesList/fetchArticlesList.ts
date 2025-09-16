import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Article } from "entities/Article";
import { getLimit } from "../../selectors/getArticlesData/getArticlesSelectors";

interface fetchArticlesListProps {
   page: number
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
   'articleList/fetchArticlesList',
   async ({ page = 1 }, { extra, rejectWithValue, getState }) => {

      const limit = getLimit(getState())
      try {
         const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
               _expand: 'user',
               _limit: limit,
               _page: page
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