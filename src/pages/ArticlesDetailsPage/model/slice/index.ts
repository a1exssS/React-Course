import { combineReducers } from '@reduxjs/toolkit'
import { articleDitailsCommentsReducer } from './articleDitailsCommentsSlice'
import { articleDitailsRecomendationReducer } from './articleDitailsRecomendationsSlice'
import { ArticlesDetailsPageShema } from '../types'

export const articleDedailsReducer = combineReducers<ArticlesDetailsPageShema>({
   recomendations: articleDitailsRecomendationReducer,
   comments: articleDitailsCommentsReducer
})