import { User } from "entities/User";

export enum ArticleBlockType {
   CODE = "CODE",
   IMAGE = "IMAGE",
   TEXT = "TEXT",
   WARNING = "WARNING"
}

export enum ArticleSortField {
   VIEWS = 'views',
   TITLE = 'title',
   CREATED = 'createdAt'
}

export enum ArticleView {
   BIG = 'BIG',
   SMALL = 'SMALL'
}

export interface ArticleBlockConfig {
   id: string;
   type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockConfig {
   type: ArticleBlockType.CODE
   code: string;
}
export interface ArticleWarningBlock extends ArticleBlockConfig {
   type: ArticleBlockType.WARNING
   title: string;
   warning: string;
   icon: string;
}
export interface ArticleImageBlock extends ArticleBlockConfig {
   type: ArticleBlockType.IMAGE
   title: string;
   src: string;
}
export interface ArticleTextBlock extends ArticleBlockConfig {
   type: ArticleBlockType.TEXT
   title?: string;
   paragraphs: string[];
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleWarningBlock | ArticleCodeBlock


export enum AritcleTypes {
   ALL = "ALL",
   IT = "IT",
   SCIENCE = "CIENCE",
   ECONOMICS = "ECONOMICS"
}

export interface Article {
   id: string;
   user: User;
   title: string;
   subtitle: string;
   image: string;
   views: number;
   createdAt: string;
   type: AritcleTypes[];
   blocks: ArticleBlock[];
}