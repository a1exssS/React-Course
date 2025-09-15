import { ArticleDetails } from 'entities/Article'
import React, { memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './ArticlesDetailsPage.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDitailsCommentsReducer, getArticleComments } from '../../model/slice/articleDitailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getIsLoading } from '../../model/selectors/comments/comments'
import { useInitialEffect } from 'shered/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import { RoutePaths } from 'shered/config/routeConfig/routeConfig'

const reducers: ReducersList = {
   ArticleDitailsComments: articleDitailsCommentsReducer
}

const ArticlesDetailsPage = () => {
   const { id } = useParams<{ id: string }>()
   const comments = useSelector(getArticleComments.selectAll)
   const isLoading = useSelector(getIsLoading)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id))
   })

   const onSendComment = useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
   }, [dispatch])

   const backToList = useCallback(() => {
      navigate(RoutePaths.articles_details)
   }, [navigate])

   if (!id) {
      return (
         <p className={styles.errorMessage}>Статья не найдена</p>
      )
   }

   return (
      <DynamicModuleLoader reducers={reducers}>
         <section className={classNames(styles.Article)}>
            <Button theme={ThemeButton.OUTLINE} onClick={backToList}>Назад к списку</Button>
            <ArticleDetails id={id} />
            <h2 className={styles.CommentTitle}>Коментарии</h2>
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
               className={styles.commentSection}
               isLoading={isLoading}
               comments={comments}
            />
         </section>
      </DynamicModuleLoader>
   )
}
export default memo(ArticlesDetailsPage)