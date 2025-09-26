import { StateSchema } from "app/providers/StoreProvider";

export const getRecomendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recomendations.isLoading
export const getRecomendationsError = (state: StateSchema) => state.articleDetailsPage?.recomendations.error 