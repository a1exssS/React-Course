import { StateSchema } from "app/providers/StoreProvider";
import { AritcleTypes, ArticleView } from "entities/Article";

export const getView = (state: StateSchema) => state.articlePage?.view ?? ArticleView.SMALL
export const getError = (state: StateSchema) => state.articlePage?.error || ''
export const getIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false
export const getLimit = (state: StateSchema) => state.articlePage?.limit || 9
export const getPageNum = (state: StateSchema) => state.articlePage?.page || 1
export const getHasMore = (state: StateSchema) => state.articlePage?.hasMore || false
export const getIsInited = (state: StateSchema) => state.articlePage?._inited || false
export const getSort = (state: StateSchema) => state.articlePage?.sort
export const getOrder = (state: StateSchema) => state.articlePage?.order
export const getSearch = (state: StateSchema) => state.articlePage?.search ?? ''
export const getType = (state: StateSchema) => state.articlePage?.type ?? AritcleTypes.ALL
