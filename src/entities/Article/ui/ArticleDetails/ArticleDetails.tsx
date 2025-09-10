import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { articleDetailsData, articleDetailsError, articleDetailsIsLoading } from '../../model/selectors/articleDetails'
import styles from './ArticleDetails.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { Skeleton } from 'shered/ui/Skeleton/Skeleton'
import { Avatar } from 'shered/ui/Avatar/Avatar'
import EyeIcon from 'shered/assets/icons/eye.svg'
import CalendarIcon from 'shered/assets/icons/calendar.svg'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleWarningBlockComponent } from '../ArticleWarningBlockComponent/ArticleWarningBlockComponent'

const initialReducers: ReducersList = {
   articleDetails: articleDetailsReducer
}

interface ArticleDetailsProps {
   id: string;
}

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {

   const dispatch = useAppDispatch()
   const isLoading = useSelector(articleDetailsIsLoading)

   const error = useSelector(articleDetailsError)
   const articleData = useSelector(articleDetailsData)

   useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
         dispatch(fetchArticleById(id))
      }
   }, [dispatch, id])

   const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
         case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
               key={block.id}
               className={styles.Block}
               block={block}
            />;
         case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
               key={block.id}
               className={styles.Block}
               block={block}
            />;
         case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
               key={block.id}
               className={styles.Block}
               block={block}
            />;
         case ArticleBlockType.WARNING:
            return <ArticleWarningBlockComponent
               key={block.id}
               className={styles.Block}
               block={block}
            />;
         default:
            return null;
      }
   }, [])

   let content;

   if (isLoading) {
      content = (
         <>
            <Skeleton className={styles.avatar} maxWidth={200} width="100%" height={200} borderRadius='50%' />
            <Skeleton className={styles.title} maxWidth={300} width="100%" height={24} />
            <Skeleton className={styles.skeleton} maxWidth={600} width="100%" height={24} />
            <Skeleton className={styles.skeleton} width="100%" height={300} />
            <Skeleton className={styles.skeleton} width="100%" height={200} />
         </>
      )
   } else if (error) {
      content = (
         <p className={styles.errorMessage}>Произошла ошибка при загрузки статьи</p>
      )
   } else {
      content = (
         <>
            <Avatar src={articleData?.image} size={200} className={styles.avatar} />
            <h1 className={styles.Headline}>{articleData?.title}</h1>
            <span className={styles.Subtitle}>{articleData?.subtitle}</span>
            <div className={styles.Items}>
               <div className={styles.Item}>
                  <EyeIcon />
                  <span>
                     {articleData?.views}
                  </span>
               </div>
               <div className={styles.Item}>
                  <CalendarIcon />
                  <span>
                     {articleData?.createdAt}
                  </span>
               </div>
            </div>
            {articleData?.blocks.map(renderBlock)}
         </>
      )
   }

   return (
      <DynamicModuleLoader reducers={initialReducers} >
         <div className={classNames(styles.Article)}>{content}</div>
      </DynamicModuleLoader>
   )
})
