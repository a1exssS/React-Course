import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
   about: '/about',
   main: '/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
   about: {
      path: RoutePaths.about,
      element: <AboutPage />
   },
   main: {
      path: RoutePaths.main,
      element: <MainPage />
   }
}