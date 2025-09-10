import { ArticleCodeBlock } from '../../model/types/article';
import React, { memo } from 'react'
import { Code } from 'shered/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
   className?: string;
   block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
   return (
      <div className={className}>
         <Code text={block.code} />
      </div>
   )
})
