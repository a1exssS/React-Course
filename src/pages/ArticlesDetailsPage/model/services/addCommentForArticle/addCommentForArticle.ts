import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Comment } from "entities/Comment";
import { getAuthData } from "entities/User";
import { articleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
   'articlePost/addCommentForArticle',
   async (text, { extra, rejectWithValue, getState, dispatch }) => {

      try {
         const userId = getAuthData(getState())
         const articleId = articleDetailsData(getState())

         if (!userId || !articleId) {
            return rejectWithValue('no data')
         }

         const response = await extra.api.post<Comment>('/comments', {
            articleId: articleId.id,
            userId: userId.id,
            comment: text
         })
         if (!response.data) {
            throw new Error()
         }
         dispatch(fetchCommentsByArticleId(articleId.id))
         return response.data
      } catch (e) {
         console.log(e)
         return rejectWithValue(`Что то пошло не так`)
      }
   },
)