import { classNames } from 'shered/lib/classNames/classNames'
import styles from './ErrorPage.module.scss'
import { Button } from 'shered/ui/Button/Button'

export const ErrorPage = () => {
   return (
      <section className={classNames(styles.ErrorContainer)}>
         <span className={classNames(styles.ErrorMessage)}>
            Что-то пошло не так D:
         </span>
         <Button onClick={() => location.reload()}>Обновить страницу</Button>
      </section>
   )
}
