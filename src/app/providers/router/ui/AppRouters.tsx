import { getAuthData } from 'entities/User'
import React, { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shered/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouters = memo(() => {

   const isAuth = useSelector(getAuthData)
   const routes = useMemo(() => {
      return Object.values(routeConfig).filter(({ authOnly }) => {
         if (authOnly && !isAuth) {
            return false
         }
         return true
      })
   }, [isAuth])

   return (
      <Suspense fallback={<PageLoader />}>
         <main className='main'>
            <Routes>
               {routes.map(({ element, path }) => {
                  return <Route element={element} path={path} key={path} />
               })}
            </Routes>
         </main>
      </Suspense>
   )
})
