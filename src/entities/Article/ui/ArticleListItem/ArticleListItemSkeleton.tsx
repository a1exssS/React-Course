import { ArticleView } from 'entities/Article/model/types/article'
import styles from './ArticleListItem.module.scss'
import { Card } from 'shered/ui/Card/Card'
import { Skeleton } from 'shered/ui/Skeleton/Skeleton'
import { classNames } from 'shered/lib/classNames/classNames'

interface ArticleListItemSkeleton {
   view: ArticleView
}

export const ArticleListItemSkeleton = ({ view }: ArticleListItemSkeleton) => {

   if (view === ArticleView.SMALL) {
      return (
         <Card className={styles.card}>
            <div className={styles.imageWrapper}>
               <Skeleton
                  width={200}
                  height={200}
                  className={styles.image}
               />
            </div>
            <div className={styles.infoWrapper}>
               <Skeleton
                  width={130}
                  height={16}
                  className={styles.image}
               />
            </div>
            <Skeleton className={styles.Title} width={150} height={20} />
         </Card>
      )
   }
   return (
      <div className={classNames(styles.ArticleListItemBig, {}, [styles[view]])}>

         <Card className={styles.card}>
            <div className={styles.header}>
               <Skeleton width={30} height={30} borderRadius='50%' />
               <Skeleton className={styles.userName} width={50} height={20} />
               <Skeleton className={styles.createdAt} width={70} height={20} />
            </div>
            <Skeleton className={styles.Title} width={"100%"} maxWidth={"70%"} height={30} />
            <Skeleton className={styles.types} width={110} height={20} />
            <Skeleton className={styles.image} width={"100%"} height={200} />
            <Skeleton className={styles.textBlock} width={"100%"} height={20} />
            <Skeleton className={styles.textBlock} width={"70%"} height={20} />
            <Skeleton className={styles.textBlock} width={"80%"} height={20} />

            <div className={styles.footerSkeleton}>
               <Skeleton width={100} height={40} />
               <Skeleton width={60} height={20} />
            </div>
         </Card>
      </div>
   )
}
