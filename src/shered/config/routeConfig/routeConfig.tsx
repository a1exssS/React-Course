import { AboutPage } from "pages/AboutPage"
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
   ARTICLES_DETAIL = 'articles_details',

   NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
   about: '/about',
   main: '/',
   profile: '/profile/', // +id
   articles: '/articles',
   articles_details: '/articles/', // +id

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
   articles_details: {
      path: RoutePaths.articles_details + ':id',
      element: <ArticlesDetailsPage />,
      authOnly: true
   },


   not_found: {
      path: RoutePaths.not_found,
      element: <PageNotFound />
   }
}