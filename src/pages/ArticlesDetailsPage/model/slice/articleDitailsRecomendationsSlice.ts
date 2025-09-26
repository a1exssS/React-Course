import {
   createEntityAdapter,
   createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';
import { ArticleDitailsRecomendationSchema } from '../types/ArticleDitailsRecomendationSchema';

const recomendationAdapter = createEntityAdapter<Article>({
   selectId: (article) => article.id,
})

export const getArticleRecomendation = recomendationAdapter.getSelectors<StateSchema>(
   (state) => state.articleDetailsPage?.recomendations || recomendationAdapter.getInitialState()
)

const articleDitailsRecomendationsSlice = createSlice({
   name: 'articleDitailsRecomendationsSlice',
   initialState: recomendationAdapter.getInitialState<ArticleDitailsRecomendationSchema>({
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
         .addCase(fetchArticleRecomendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
            state.isLoading = false;
            recomendationAdapter.setAll(state, action.payload)
            state.error = undefined
         })
         .addCase(fetchArticleRecomendations.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
         })
   }
})

export const { reducer: articleDitailsRecomendationReducer } = articleDitailsRecomendationsSlice
export const { actions: articleDitailsRecomendationActions } = articleDitailsRecomendationsSlice