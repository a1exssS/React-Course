import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'

const initialReducers: ReducersList = {
   profile: profileReducer
}

const ProfilePage = memo(() => {

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchProfileData())
   }, [dispatch])

   return (
      <DynamicModuleLoader reducers={initialReducers}>
         <ProfileCard />
      </DynamicModuleLoader>
   )
})

export default ProfilePage