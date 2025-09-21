import { EntityState } from "@reduxjs/toolkit";
import { AritcleTypes, Article, ArticleSortField, ArticleView } from "entities/Article";
import { SortOrder } from "shered/types/SortOrder";

export interface ArticlePageSchema extends EntityState<Article> {
   isLoading?: boolean;
   error?: string;

   view: ArticleView;
   page: number;
   hasMore: boolean;
   limit: number;

   order: SortOrder;
   sort: ArticleSortField;
   search: string;
   type: AritcleTypes;
   _inited: boolean;
}