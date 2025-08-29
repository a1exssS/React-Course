import { memo } from 'react';
import styles from './Spiner.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'

interface SpinerProps {
   className?: string;
}

export const Spiner = memo(({ className }: SpinerProps) => {
   return (
      <span className={classNames(styles.Spiner, {}, [className])}></span>
   )
})
