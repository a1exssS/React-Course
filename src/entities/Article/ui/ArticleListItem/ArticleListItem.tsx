import { classNames } from 'shered/lib/classNames/classNames';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article'
import { memo } from 'react'
import styles from './ArticleListItem.module.scss'
import ViewsIcon from 'shered/assets/icons/eye.svg'
import { Card } from 'shered/ui/Card/Card';
import { Avatar } from 'shered/ui/Avatar/Avatar';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePaths } from 'shered/config/routeConfig/routeConfig';
import { AppLink } from 'shered/ui/AppLink/AppLink';

interface ArticleListItemProps {
   article: Article;
   view: ArticleView
   className?: string;
}

export const ArticleListItem = memo(({ article, className, view }: ArticleListItemProps) => {

   const views = (
      <>
         <span className={styles.views}>{article.views}</span>
         <ViewsIcon className={styles.viewsIcon} />
      </>
   )

   if (view === ArticleView.BIG) {

      const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

      return (
         <div className={classNames(styles.ArticleListItemBig, {}, [className, styles[view]])}>
            <Card className={styles.card}>
               <div className={styles.header}>
                  <Avatar size={30} src={article.user.avatar} />
                  <span className={styles.userName}>
                     {article.user.username}
                  </span>
                  <span className={styles.createdAt}>
                     {article.createdAt}
                  </span>
               </div>
               <h3 className={styles.Title}>{article.title}</h3>
               <span className={styles.types}>
                  {article.type.join(' ')}
               </span>
               <img src={article.image} alt={article.title} className={styles.image} />
               {textBlock &&
                  <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
               }
               <div className={styles.footer}>
                  <AppLink target='_blank' to={RoutePaths.article_details + article.id} className={styles.footerLink} >
                     Читать далее...
                  </AppLink>
                  {views}
               </div>
            </Card>
         </div>
      )
   }

   return (

      <AppLink to={RoutePaths.article_details + article.id} className={classNames(styles.ArticleLayoutSmall, {}, [className, styles[view]])} target='_blank'>
         <Card className={styles.card}>
            <div className={styles.imageWrapper}>
               <img src={article.image} alt={article.title} className={styles.image} />
               <span className={styles.createdAt}>{article.createdAt}</span>
            </div>
            <div className={styles.infoWrapper}>
               <span className={styles.types}>{article.type.join(', ')}</span>
               {views}
            </div>
            <h3 className={styles.Title}>{article.title}</h3>
         </Card>
      </AppLink>
   )
})
