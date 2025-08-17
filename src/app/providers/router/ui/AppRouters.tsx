import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shered/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouters = () => {
   return (
      <Suspense fallback={<PageLoader />}>
         <main className='main'>
            <Routes>
               {Object.values(routeConfig).map(({ element, path }) => (
                  <Route element={element} path={path} key={path} />
               ))}
            </Routes>
         </main>
      </Suspense>
   )
}
