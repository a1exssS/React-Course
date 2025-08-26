import styles from './LoginForm.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { Button } from 'shered/ui/Button/Button'
import { Input } from 'shered/ui/Input/Input'

export const LoginForm = () => {
   return (
      <form className={classNames(styles.LoginForm)}>
         <Input type="text" className={styles.Input} placeholder='Введите имя' autoFocus={true} />
         <Input type="text" className={styles.Input} placeholder='Введите пароль' />
         <Button className={styles.Button}>
            Войти
         </Button>
      </form>
   )
}
