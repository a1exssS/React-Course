import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { articlePageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getIsInited } from "../../selectors/getArticlesData/getArticlesSelectors";
import { AritcleTypes, ArticleSortField } from "entities/Article";
import { SortOrder } from "shered/types/SortOrder";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
   'articleList/initArticlesPage',
   async (searchParams, { extra, rejectWithValue, getState, dispatch }) => {
      const inited = getIsInited(getState())
      if (!inited) {
         const orderFormUrl = searchParams.get('order') as SortOrder
         const sortFormUrl = searchParams.get('sort') as ArticleSortField
         const searchFormUrl = searchParams.get('search')
         const typeFormUrl = searchParams.get('type') as AritcleTypes

         if (typeFormUrl) {
            dispatch(articlePageActions.setType(typeFormUrl))
         }
         if (orderFormUrl) {
            dispatch(articlePageActions.setOrder(orderFormUrl))
         }
         if (sortFormUrl) {
            dispatch(articlePageActions.setSort(sortFormUrl))
         }
         if (searchFormUrl) {
            dispatch(articlePageActions.setSearch(searchFormUrl))
         }

         dispatch(articlePageActions.initView())
         dispatch(fetchArticlesList({ replace: false }))
      }
   },
)