import {
   createEntityAdapter,
   createSlice,
   PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDitailsCommentsSchema } from '../types/ArticleDitailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
   selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
   (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDitailsCommentsSlice = createSlice({
   name: 'articleDitailsCommentsSlice',
   initialState: commentsAdapter.getInitialState<ArticleDitailsCommentsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {

      }
   }),
   reducers: {

   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload)
            state.error = undefined
         })
         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
         })
   }
})

export const { reducer: articleDitailsCommentsReducer } = articleDitailsCommentsSlice
export const { actions: articleDitailsCommentsActions } = articleDitailsCommentsSlice