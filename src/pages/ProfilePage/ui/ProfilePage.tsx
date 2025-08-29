import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const initialReducers: ReducersList = {
   profile: profileReducer
}

const ProfilePage = memo(() => {
   return (
      <DynamicModuleLoader reducers={initialReducers}>
         <div>ProfilePage</div>
      </DynamicModuleLoader>
   )
})

export default ProfilePage