import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePaths } from 'shered/config/routeConfig/routeConfig';
import { classNames } from 'shered/lib/classNames/classNames';
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import styles from './ArticlesDetailsPageHeader.module.scss'
import { useSelector } from 'react-redux';
import { isUserCanEddit } from '../../model/selectors/isUserCanEddit/isUserCanEddit';

interface ArticlesDetailsPageHeaderProps {
   className?: string;
}

export const ArticlesDetailsPageHeader = ({ className }: ArticlesDetailsPageHeaderProps) => {

   const navigate = useNavigate()
   const { id } = useParams<{ id: string }>()

   const backToList = useCallback(() => {
      navigate(RoutePaths.article_details)
   }, [navigate])
   const edditPage = useCallback(() => {
      navigate(RoutePaths.article_details + id + '/eddit')
   }, [navigate, id])
   const isEdditable = useSelector(isUserCanEddit)

   return (
      <div className={classNames(styles.ArticlesHeader, {}, [className])}>
         <Button theme={ThemeButton.OUTLINE} onClick={backToList}>
            Назад к списку
         </Button>

         {isEdditable &&
            <Button
               className={styles.edditButton}
               theme={ThemeButton.OUTLINE}
               onClick={edditPage}
            >
               Редактировать
            </Button>
         }

      </div>
   )
}
