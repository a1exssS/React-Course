import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { PageNotFound } from "pages/PageNotFound"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

type AppRoutesProps = RouteProps & {
   authOnly?: boolean;
}

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   PROFILE = 'profile',


   NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
   about: '/about',
   main: '/',
   profile: '/profile',


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
      path: RoutePaths.profile,
      element: <ProfilePage />,
      authOnly: true,
   },


   not_found: {
      path: RoutePaths.not_found,
      element: <PageNotFound />
   }
}