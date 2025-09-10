import { ArticleWarningBlock } from 'entities/Article/model/types/article';
import React, { memo } from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './ArticleWarningBlockComponent.module.scss'

interface ArticleWarningBlockComponentProps {
   className?: string;
   block: ArticleWarningBlock;
}

export const ArticleWarningBlockComponent = memo(({ className, block }: ArticleWarningBlockComponentProps) => {
   return (
      <div className={classNames(styles.ArticleWarningBox, {}, [className])}>
         <h3>
            {block.title}
         </h3>
         <p>
            {block.warning}
         </p>
      </div>
   )
})
