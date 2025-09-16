import { classNames } from 'shered/lib/classNames/classNames'
import styles from './PageNotFound.module.scss'
import { Page } from 'shered/ui/Page/Page'

export const PageNotFound = () => {
   return (
      <Page className={classNames(styles.notFoundSection)}>
         Страница не найдена
      </Page>
   )
}
