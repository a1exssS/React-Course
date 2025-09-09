import { fetchProfileData, getError, getForm, getIsLoading, getProfileErrors, getReadonly, profileActions, ProfileCard, profileReducer } from 'entities/Profile'
import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfileHeader } from './ProfilePageHeader/ProfileHeader'
import { NumberRegex } from 'shered/lib/regex/NumberRegex/NumberRegex'
import { CurrencyList } from 'entities/Currency'
import { CountryList } from 'entities/Country'

const initialReducers: ReducersList = {
   profile: profileReducer
}

const ProfilePage = memo(() => {

   const dispatch = useAppDispatch()
   const formData = useSelector(getForm)
   const error = useSelector(getError)
   const isLoading = useSelector(getIsLoading)
   const readonly = useSelector(getReadonly)
   const errors = useSelector(getProfileErrors)

   useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
         dispatch(fetchProfileData())
      }
   }, [dispatch])

   const onChangeFirstName = useCallback((value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }))
   }, [dispatch])
   const onChangeLastName = useCallback((value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
   }, [dispatch])
   const onChangeAge = useCallback((value?: string) => {
      if (NumberRegex(value || 0)) {
         dispatch(profileActions.updateProfile({ age: Number(value) }))
      }
   }, [dispatch])
   const onChangeCity = useCallback((value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
   }, [dispatch])
   const onChangeUsername = useCallback((value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
   }, [dispatch])
   const onChangeAvatar = useCallback((value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
   }, [dispatch])
   const onChangeCurrency = useCallback((currency?: CurrencyList) => {
      dispatch(profileActions.updateProfile({ currency: currency || CurrencyList.RUB }))
   }, [dispatch])
   const onChangeCountry = useCallback((country?: CountryList) => {
      dispatch(profileActions.updateProfile({ country: country || CountryList.Russia }))
   }, [dispatch])

   return (
      <DynamicModuleLoader reducers={initialReducers}>
         <ProfileHeader readonly={readonly} />
         {errors?.length && errors.map((arg) => {
            return <span key={arg}>{arg}</span>
         })}
         <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeEvents={{
               onChangeFirstName,
               onChangeLastName,
               onChangeCity,
               onChangeAge,
               onChangeUsername,
               onChangeAvatar,
               onChangeCurrency,
               onChangeCountry
            }}

         />
      </DynamicModuleLoader>
   )
})

export default ProfilePage