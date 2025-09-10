import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shered/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RecuireAuth } from './RecuireAuth'

export const AppRouters = memo(() => {

   const renderWithWrapper = useCallback((route: AppRoutesProps) => {

      return (
         <Route
            element={route.authOnly ? <RecuireAuth>{route.element}</RecuireAuth> : route.element}
            path={route.path}
            key={route.path}
         />
      )
   }, [])

   return (
      <Suspense fallback={<PageLoader />}>
         <main className='main'>
            <Routes>
               {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
         </main>
      </Suspense>
   )
})
