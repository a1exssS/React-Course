import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { AritcleTypes, Article } from "entities/Article";
import { getLimit, getOrder, getPageNum, getSearch, getSort, getType } from "../../selectors/getArticlesData/getArticlesSelectors";
import { addQueryParams } from "shered/lib/hooks/url/addQueryParams";

interface fetchArticlesListProps {
   replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
   'articleList/fetchArticlesList',
   async ({ replace = false }, { extra, rejectWithValue, getState }) => {

      const limit = getLimit(getState())

      const sort = getSort(getState())
      const order = getOrder(getState())
      const search = getSearch(getState())
      const page = getPageNum(getState())
      const type = getType(getState())

      try {
         addQueryParams({
            sort, search, order, type
         })
         const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
               _expand: 'user',
               _limit: limit,
               _page: page,
               _sort: sort,
               _order: order,
               q: search,
               type: type === AritcleTypes.ALL ? undefined : type
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