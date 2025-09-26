import { AboutPage } from "pages/AboutPage"
import { ArticlesDetailsCreatePage } from "pages/ArticlesDetailsCreatePage"
import { ArticlesDetailsEdditPage } from "pages/ArticlesDetailsEdditPage"
import { ArticlesDetailsPage } from "pages/ArticlesDetailsPage"
import { ArticlesPage } from "pages/ArticlesPage"
import { MainPage } from "pages/MainPage"
import { PageNotFound } from "pages/PageNotFound"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
   authOnly?: boolean;
}

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   PROFILE = 'profile',
   ARTICLES = 'articles',
   ARTICLE_DETAIL = 'article_details',
   ARTICLE_CREATE = 'article_create',
   ARTICLE_EDDIT = 'article_eddit',

   NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
   about: '/about',
   main: '/',
   profile: '/profile/', // +id
   articles: '/articles',
   article_details: '/articles/', // +id
   article_create: '/articles/create',
   article_eddit: '/articles/:id/eddit', // +id

   not_found: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
   about: {
      path: RoutePaths.about,
      element: <AboutPage />
   },
   main: {
      path: RoutePaths.main,
      element: <MainPage />,
   },
   profile: {
      path: RoutePaths.profile + ":id",
      element: <ProfilePage />,
      authOnly: true,
   },
   articles: {
      path: RoutePaths.articles,
      element: <ArticlesPage />,
      authOnly: true
   },
   article_details: {
      path: RoutePaths.article_details + ':id',
      element: <ArticlesDetailsPage />,
      authOnly: true
   },
   article_create: {
      path: RoutePaths.article_create,
      element: <ArticlesDetailsCreatePage />,
      authOnly: true
   },
   article_eddit: {
      path: RoutePaths.article_eddit,
      element: <ArticlesDetailsEdditPage />,
      authOnly: true,
   },


   not_found: {
      path: RoutePaths.not_found,
      element: <PageNotFound />
   }
}