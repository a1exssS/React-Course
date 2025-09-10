import { ArticleImageBlock } from '../../model/types/article';
import { memo } from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
   className?: string;
   block?: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
   return (
      <div className={classNames(styles.ArticleImageBox, {}, [className])}>
         <img src={block?.src} alt={block?.src} />
         <span>
            {block?.title}

         </span>
      </div>
   )
})
