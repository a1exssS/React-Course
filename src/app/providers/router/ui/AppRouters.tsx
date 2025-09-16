import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shered/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouters = memo(() => {

   const renderWithWrapper = useCallback((route: AppRoutesProps) => {

      return (
         <Route
            element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
            path={route.path}
            key={route.path}
         />
      )
   }, [])

   return (
      <Suspense fallback={<PageLoader />}>
         <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
         </Routes>
      </Suspense>
   )
})
