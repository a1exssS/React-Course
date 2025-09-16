import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";

export const getView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL
export const getError = (state: StateSchema) => state.articlePage?.error || ''
export const getIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false
export const getLimit = (state: StateSchema) => state.articlePage?.limit || 9
export const getPageNum = (state: StateSchema) => state.articlePage?.page || 1
export const getHasMore = (state: StateSchema) => state.articlePage?.hasMore || false
