import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { getHasMore, getPageNum, getIsLoading } from "../../selectors/getArticlesData/getArticlesSelectors";
import { articlePageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
   'articleList/fetchNextArticlesPage',
   async (_, { extra, rejectWithValue, getState, dispatch }) => {

      const hasMore = getHasMore(getState())
      const page = getPageNum(getState())
      const isLoading = getIsLoading(getState())

      if (hasMore && !isLoading) {
         dispatch(articlePageActions.setPage(page + 1))
         dispatch(fetchArticlesList({ replace: false }))
      }
   },
)