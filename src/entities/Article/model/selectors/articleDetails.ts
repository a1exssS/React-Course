import { StateSchema } from "app/providers/StoreProvider";

export const articleDetailsData = (state: StateSchema) => state.articleDetails?.data
export const articleDetailsError = (state: StateSchema) => state.articleDetails?.error
export const articleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading 