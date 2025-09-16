import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { articlePageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getIsInited } from "../../selectors/getArticlesData/getArticlesSelectors";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
   'articleList/initArticlesPage',
   async (_, { extra, rejectWithValue, getState, dispatch }) => {
      const inited = getIsInited(getState())
      if (!inited) {

         dispatch(articlePageActions.initView())
         dispatch(fetchArticlesList({
            page: 1
         }))
      }
   },
)