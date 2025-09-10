import React, { memo, useCallback } from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './Code.module.scss'
import CopyIcon from '../../assets/icons/copy.svg'
import { Button } from '../Button/Button';

interface CodeProps {
   className?: string;
   text: string;
}

export const Code = memo(({ text, className }: CodeProps) => {

   const onCopy = useCallback(() => {
      navigator.clipboard.writeText(text)
   }, [text])

   return (
      <pre className={classNames(styles.Code, {}, [className])}>
         <Button className={styles.copyButton} onClick={onCopy}><CopyIcon /></Button>
         <code>
            {text}
         </code>
      </pre>
   )
})
