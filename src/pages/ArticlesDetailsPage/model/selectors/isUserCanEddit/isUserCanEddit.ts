import { createSelector } from "@reduxjs/toolkit";
import { articleDetailsData } from "entities/Article";
import { getAuthData } from "entities/User";

export const isUserCanEddit = createSelector(articleDetailsData, getAuthData,
   (article, user) => {
      if (!article?.user.id || !user?.id) return false
      return article.user.id === user.id
   })