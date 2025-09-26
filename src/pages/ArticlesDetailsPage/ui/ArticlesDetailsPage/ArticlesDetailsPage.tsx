import { ArticleDetails, ArticleList } from 'entities/Article'
import React, { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ArticlesDetailsPage.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slice/articleDitailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getIsLoading } from '../../model/selectors/comments/comments'
import { useInitialEffect } from 'shered/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'widgets/Page/Page'
import { getArticleRecomendation } from '../../model/slice/articleDitailsRecomendationsSlice'
import { getRecomendationsIsLoading } from '../../model/selectors/recomendations/recomendations'
import { fetchArticleRecomendations } from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations'
import { articleDedailsReducer } from 'pages/ArticlesDetailsPage/model/slice'
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader'

const reducers: ReducersList = {
   articleDetailsPage: articleDedailsReducer
}

const ArticlesDetailsPage = () => {
   const { id } = useParams<{ id: string }>()
   const comments = useSelector(getArticleComments.selectAll)
   const recomendations = useSelector(getArticleRecomendation.selectAll)
   const recomendationsIsLoading = useSelector(getRecomendationsIsLoading)
   const isLoading = useSelector(getIsLoading)
   const dispatch = useAppDispatch()

   useInitialEffect(() => {
      dispatch(fetchArticleRecomendations())
      dispatch(fetchCommentsByArticleId(id))
   })

   const onSendComment = useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
   }, [dispatch])



   if (!id) {
      return (
         <Page>
            <p className={styles.errorMessage}>Статья не найдена</p>
         </Page>
      )
   }

   return (
      <DynamicModuleLoader reducers={reducers}>
         <Page className={classNames(styles.Article)}>
            <ArticlesDetailsPageHeader />
            <ArticleDetails id={id} />
            <h2 className={styles.CommentTitle}>Рекомендуем</h2>
            <ArticleList articles={recomendations} isLoading={recomendationsIsLoading} className={styles.recomendationsScroll} />
            <h2 className={styles.CommentTitle}>Коментарии</h2>
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
               className={styles.commentSection}
               isLoading={isLoading}
               comments={comments}
            />
         </Page>
      </DynamicModuleLoader>
   )
}
export default memo(ArticlesDetailsPage)