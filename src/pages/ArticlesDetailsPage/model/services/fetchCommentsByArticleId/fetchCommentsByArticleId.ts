import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/schema/StateSchema";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
   'articleDedailsComments/fetchCommentsByArticleId',
   async (articleId, { extra, rejectWithValue }) => {
      if (!articleId) {
         return rejectWithValue('Неизвесная ошибка')
      }

      try {
         const response = await extra.api.get<Comment[]>(`/comments`, {
            params: {
               articleId,
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