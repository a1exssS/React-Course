import React, { useCallback } from 'react'
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import styles from './ProfileHeader.module.scss'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import { getAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface ProfileHeaderProps {
   readonly: boolean;
}

export const ProfileHeader = ({ readonly }: ProfileHeaderProps) => {

   const dispatch = useAppDispatch()
   const isAuth = useSelector(getAuthData)
   const userId = useParams<{ id: string }>()

   const onEddit = useCallback(() => {
      dispatch(profileActions.setReadonly(false))
   }, [dispatch])

   const onCancelEddit = useCallback(() => {
      dispatch(profileActions.setCancelEddit())
   }, [dispatch])
   const onSave = useCallback(() => {
      dispatch(updateProfileData())

   }, [dispatch])

   if (isAuth?.id !== userId.id) {
      return <div className={styles.ProfileHeader}>
         <h1>Профиль</h1>
      </div>
   }

   return (
      <div className={styles.ProfileHeader}>
         <h1>Профиль</h1>
         {readonly ?
            <Button theme={ThemeButton.OUTLINE} onClick={onEddit}>
               Редактировать
            </Button> :
            <div className={styles.buttons}>
               <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEddit}>
                  Отменить
               </Button>
               <Button theme={ThemeButton.OUTLINE_GREEN} onClick={onSave}>
                  Сохранить
               </Button>

            </div>
         }
      </div>
   )
}
