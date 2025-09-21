import { getOrder, getSearch, getSort, getType, getView } from '../../model/selectors/getArticlesData/getArticlesSelectors'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shered/ui/Button/Button'
import { AritcleTypes, ArticleSortField, ArticleView } from 'entities/Article'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import { classNames } from 'shered/lib/classNames/classNames'
import HorizontalIcon from 'shered/assets/icons/horizontal-lined.svg'
import TableIcon from 'shered/assets/icons/table-lined.svg'
import styles from './ArticlesPageFilters.module.scss'
import { Card } from 'shered/ui/Card/Card'
import { Input } from 'shered/ui/Input/Input'
import { ArticleSortSelector, ArticleTypeTabs } from 'features/ArticleSortSelector'
import { SortOrder } from 'shered/types/SortOrder'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shered/lib/hooks/useDebounce/useDebounce'

export const ArticlesPageFilters = () => {
   const dispatch = useAppDispatch()
   const isView = useSelector(getView)
   const order = useSelector(getOrder)
   const sort = useSelector(getSort)
   const search = useSelector(getSearch)
   const type = useSelector(getType)
   const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }))
   }, [dispatch])
   const debounceFetchData = useDebounce(fetchData, 500)

   const setViewBig = useCallback(() => {
      dispatch(articlePageActions.setView(ArticleView.BIG))
   }, [dispatch])

   const setViewSmall = useCallback(() => {
      dispatch(articlePageActions.setView(ArticleView.SMALL))
   }, [dispatch])

   const setOrder = useCallback((value: SortOrder) => {
      dispatch(articlePageActions.setOrder(value))
      dispatch(articlePageActions.setPage(1))
      debounceFetchData()
   }, [dispatch, debounceFetchData])

   const setSort = useCallback((value: ArticleSortField) => {
      dispatch(articlePageActions.setSort(value))
      dispatch(articlePageActions.setPage(1))
      debounceFetchData()
   }, [dispatch, debounceFetchData])

   const setSearch = useCallback((value: string) => {
      dispatch(articlePageActions.setSearch(value))
      dispatch(articlePageActions.setPage(1))
      debounceFetchData()
   }, [dispatch, debounceFetchData])

   const setType = useCallback((tab: AritcleTypes) => {
      dispatch(articlePageActions.setType(tab))
      dispatch(articlePageActions.setPage(1))
      fetchData()
   }, [dispatch, fetchData])

   return (
      <div className={styles.ArticlesHeader}>

         <div className={styles.ArticlesControllPanel}>
            <ArticleSortSelector
               order={order}
               sort={sort}
               onChangeOrder={setOrder}
               onChangeSort={setSort}
            />

            <div className={styles.controllButtons}>
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
         </div>
         <Card className={styles.search}>
            <Input
               placeholder='Поиск'
               onChange={setSearch}
               value={search}
            />
         </Card>
         <ArticleTypeTabs onChangeType={setType} value={type} />
      </div>
   )
}
