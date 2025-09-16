import { ArticleList, ArticleView } from 'entities/Article'
import { memo, useCallback } from 'react'
import styles from './ArticlesPage.module.scss'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageActions, articlePageReducer, getArticle } from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shered/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { getError, getView } from '../../model/selectors/getArticlesData/getArticlesSelectors'
import { getIsLoading } from '../../model/selectors/getArticlesData/getArticlesSelectors'
import HorizontalIcon from 'shered/assets/icons/horizontal-lined.svg'
import TableIcon from 'shered/assets/icons/table-lined.svg'
import { Button } from 'shered/ui/Button/Button'
import { classNames } from 'shered/lib/classNames/classNames'
import { Page } from 'shered/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

const rootReducer: ReducersList = {
   articlePage: articlePageReducer
}

const ArticlesPage = () => {

   const dispatch = useAppDispatch()
   const isView = useSelector(getView)
   const isLoading = useSelector(getIsLoading)
   const articles = useSelector(getArticle.selectAll)
   const error = useSelector(getError)
   const onLoadNextPage = useCallback(() => {
      dispatch(fetchNextArticlesPage())
   }, [dispatch])


   useInitialEffect(() => {
      dispatch(articlePageActions.initView())
      dispatch(fetchArticlesList({
         page: 1
      }))
   })


   const setViewBig = useCallback(() => {
      dispatch(articlePageActions.setView(ArticleView.BIG))
   }, [dispatch])
   const setViewSmall = useCallback(() => {
      dispatch(articlePageActions.setView(ArticleView.SMALL))
   }, [dispatch])

   if (error) {
      return <Page>
         Что то пошло не так
      </Page>
   }

   return (
      <DynamicModuleLoader reducers={rootReducer}>
         <Page onScrollEnd={onLoadNextPage} className={styles.ArticlesPage}>
            <div className={styles.ArticlesHeader}>

               <Button
                  onClick={setViewBig}
                  className={styles.horizontalButton}
               >
                  <HorizontalIcon className={
                     classNames('', {
                        [styles.selected]: ArticleView.BIG !== isView
                     }
                     )} />
               </Button>
               <Button
                  onClick={setViewSmall}
                  className={styles.tableButton}
               >
                  <TableIcon className={
                     classNames('', {
                        [styles.selected]: ArticleView.SMALL !== isView
                     }
                     )} />
               </Button>
            </div>
            <ArticleList
               view={isView}
               isLoading={isLoading}
               articles={articles} />
         </Page>
      </DynamicModuleLoader>
   )
}
export default memo(ArticlesPage)
