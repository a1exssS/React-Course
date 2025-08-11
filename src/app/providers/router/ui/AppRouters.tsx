import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shered/config/routeConfig/routeConfig'

export const AppRouters = () => {
   return (
      <Suspense fallback={<div>Loading...</div>}>
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
