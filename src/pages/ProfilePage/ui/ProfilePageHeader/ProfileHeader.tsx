import React, { useCallback } from 'react'
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import styles from './ProfileHeader.module.scss'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';

interface ProfileHeaderProps {
   readonly: boolean;
}

export const ProfileHeader = ({ readonly }: ProfileHeaderProps) => {

   const dispatch = useAppDispatch()

   const onEddit = useCallback(() => {
      dispatch(profileActions.setReadonly(false))
   }, [dispatch])

   const onCancelEddit = useCallback(() => {
      dispatch(profileActions.setCancelEddit())
   }, [dispatch])
   const onSave = useCallback(() => {
      dispatch(updateProfileData())

   }, [dispatch])

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
