import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { PageNotFound } from "pages/PageNotFound"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',



   NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
   about: '/about',
   main: '/',



   not_found: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
   about: {
      path: RoutePaths.about,
      element: <AboutPage />
   },
   main: {
      path: RoutePaths.main,
      element: <MainPage />
   },



   not_found: {
      path: RoutePaths.not_found,
      element: <PageNotFound />
   }
}