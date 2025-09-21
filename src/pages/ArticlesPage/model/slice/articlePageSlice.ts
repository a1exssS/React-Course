import {
   createEntityAdapter,
   createSlice,
   PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { AritcleTypes, Article, ArticleSortField, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shered/consts/localStorageKey';
import { SortOrder } from 'shered/types/SortOrder';

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

      },
      _inited: false,
      limit: 9,
      order: 'asc',
      search: '',
      sort: ArticleSortField.CREATED,
      type: AritcleTypes.ALL
   }),
   reducers: {
      setView: (state, action) => {
         state.view = action.payload
         localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
      },
      initView: (state) => {
         const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
         state.view = view
         state.limit = view === ArticleView.BIG ? 4 : 9;
         state._inited = true
      },
      setPage: (state, action) => {
         state.page = action.payload
      },
      setType: (state, action: PayloadAction<AritcleTypes>) => {
         state.type = action.payload
      },
      setOrder: (state, action: PayloadAction<SortOrder>) => {
         state.order = action.payload
      },
      setSearch: (state, action: PayloadAction<string>) => {
         state.search = action.payload
      },
      setSort: (state, action: PayloadAction<ArticleSortField>) => {
         state.sort = action.payload
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;

            if (action.meta.arg.replace) {
               articlesAdapter.removeAll(state)
            }
         })
         .addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit
            state.error = undefined

            if (action.meta.arg.replace) {
               articlesAdapter.setAll(state, action.payload)
            } else {
               articlesAdapter.addMany(state, action.payload)
            }
         })
         .addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
         })
   }
})

export const { reducer: articlePageReducer } = articlePageSlice
export const { actions: articlePageActions } = articlePageSlice