import { classNames } from 'shered/lib/classNames/classNames'
import styles from './ErrorPage.module.scss'
import { Button } from 'shered/ui/Button/Button'
import { Page } from 'widgets/Page/Page'

export const ErrorPage = () => {
   return (
      <Page className={classNames(styles.ErrorContainer)}>
         <span className={classNames(styles.ErrorMessage)}>
            Что-то пошло не так D:
         </span>
         <Button onClick={() => location.reload()}>Обновить страницу</Button>
      </Page>
   )
}
