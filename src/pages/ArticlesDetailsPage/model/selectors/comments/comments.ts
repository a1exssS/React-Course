import { StateSchema } from "app/providers/StoreProvider";

export const getIsLoading = (state: StateSchema) => state.ArticleDitailsComments?.isLoading
export const getError = (state: StateSchema) => state.ArticleDitailsComments?.error 