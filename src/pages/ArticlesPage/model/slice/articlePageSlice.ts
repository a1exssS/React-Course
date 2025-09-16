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
      page: 1,
      hasMore: true,
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
         const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
         state.view = view
         state.limit = view === ArticleView.BIG ? 4 : 9
      },
      setPage: (state, action) => {
         state.page = action.payload
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
            articlesAdapter.addMany(state, action.payload)
            state.hasMore = action.payload.length > 0
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