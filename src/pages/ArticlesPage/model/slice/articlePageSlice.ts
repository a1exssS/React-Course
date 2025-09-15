import {
   createEntityAdapter,
   createSlice,
   PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shered/consts/localStorageKey';

const articlesAdapter = createEntityAdapter<Article>({
   selectId: (article) => article.id,
})

export const getArticle = articlesAdapter.getSelectors<StateSchema>(
   (state) => state.articlePage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
   name: 'articlePageSlice',
   initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
      isLoading: false,
      error: undefined,
      view: ArticleView.SMALL,
      ids: [],
      entities: {

      }
   }),
   reducers: {
      setView: (state, action) => {
         state.view = action.payload
         localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
      },
      initView: (state) => {
         state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload)
            state.error = undefined
         })
         .addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
         })
   }
})

export const { reducer: articlePageReducer } = articlePageSlice
export const { actions: articlePageActions } = articlePageSlice