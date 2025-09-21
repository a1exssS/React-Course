import { classNames } from 'shered/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { memo } from 'react'
import styles from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleView
}

export const ArticleList = memo(({ articles, className, isLoading, view = ArticleView.SMALL }: ArticleListProps) => {

   const renderArticle = (article: Article) => {
      return <ArticleListItem article={article} view={view} key={article.id} />
   }

   if (!isLoading && !articles.length) {
      return (
         <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            <p>Таких статей нет D:</p>
         </div>
      )
   }

   return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>

         {articles.length ?
            articles.map(renderArticle) :
            null
         }
         {isLoading && new Array(view === ArticleView.SMALL ? 9 : 3)
            .fill(0)
            .map((item, index) => {
               return <ArticleListItemSkeleton view={view} key={index} />
            })
         }
      </div>
   )
})
