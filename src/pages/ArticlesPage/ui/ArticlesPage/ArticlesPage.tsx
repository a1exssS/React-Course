import { ArticleList } from 'entities/Article'
import { memo, useCallback } from 'react'
import styles from './ArticlesPage.module.scss'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageReducer, getArticle } from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shered/lib/hooks/useInitialEffect/useInitialEffect'
import { getError, getView, } from '../../model/selectors/getArticlesData/getArticlesSelectors'
import { getIsLoading } from '../../model/selectors/getArticlesData/getArticlesSelectors'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'

const rootReducer: ReducersList = {
   articlePage: articlePageReducer
}

const ArticlesPage = () => {

   const dispatch = useAppDispatch()
   const isView = useSelector(getView)
   const isLoading = useSelector(getIsLoading)
   const articles = useSelector(getArticle.selectAll)
   const error = useSelector(getError)
   const [searchParams] = useSearchParams()

   const onLoadNextPage = useCallback(() => {
      dispatch(fetchNextArticlesPage())
   }, [dispatch])

   useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams))
   })



   if (error) {
      return <Page>
         Что то пошло не так
      </Page>
   }

   return (
      <DynamicModuleLoader reducers={rootReducer} removeAfterUnmount={false}>
         <Page onScrollEnd={onLoadNextPage} className={styles.ArticlesPage} watchScrollPosition>
            <ArticlesPageFilters />
            <ArticleList
               view={isView}
               isLoading={isLoading}
               articles={articles} />
         </Page>
      </DynamicModuleLoader>
   )
}
export default memo(ArticlesPage)
