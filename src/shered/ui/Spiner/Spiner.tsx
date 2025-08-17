import styles from './Spiner.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'

interface SpinerProps {
   className?: string;
}

export const Spiner = ({ className }: SpinerProps) => {
   return (
      <span className={classNames(styles.Spiner, {}, [className])}></span>
   )
}
