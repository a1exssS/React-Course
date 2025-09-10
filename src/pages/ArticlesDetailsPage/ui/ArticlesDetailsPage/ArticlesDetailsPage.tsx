import { ArticleDetails } from 'entities/Article'
import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ArticlesDetailsPage.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'

const ArticlesDetailsPage = () => {

   const { id } = useParams<{ id: string }>()

   if (!id) {
      return (
         <p className={styles.errorMessage}>Статья не найдена</p>
      )
   }

   return (
      <div className={classNames(styles.Article)}><ArticleDetails id={id} /></div>
   )
}
export default memo(ArticlesDetailsPage)