import { classNames } from 'shered/lib/classNames/classNames'
import styles from './PageNotFound.module.scss'

export const PageNotFound = () => {
   return (
      <section className={classNames(styles.notFoundSection)}>
         Страница не найдена
      </section>
   )
}
