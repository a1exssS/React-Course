import { ArticleTextBlock } from '../../model/types/article';
import { memo } from 'react'
import styles from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
   className?: string;
   block?: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ block, className }: ArticleTextBlockComponentProps) => {

   return (
      <div className={className}>
         {block?.title && (
            <h2 className={styles.Title}>{block.title}</h2>
         )}
         {block?.paragraphs.map((paragraph) => {
            return <p className={styles.Text} key={paragraph}>{paragraph}</p>
         })}
      </div>
   )
})
