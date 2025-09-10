import { getAuthData } from 'entities/User'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePaths } from 'shered/config/routeConfig/routeConfig'

interface RecuireAuthProps {
   children: React.ReactNode
}

export const RequireAuth = ({ children }: RecuireAuthProps) => {
   const isAuth = useSelector(getAuthData)
   const location = useLocation()
   if (!isAuth) {
      return <Navigate to={RoutePaths.main} state={{ from: location }} replace />
   }

   return <>{children}</>
}
