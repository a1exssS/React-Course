import { useDispatch, useSelector } from 'react-redux'
import styles from './LoginForm.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import { Input } from 'shered/ui/Input/Input'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/selectors/getError/getError'

export const LoginForm = memo(() => {

   const dispatch = useDispatch()

   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value))
   }, [dispatch])
   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value))
   }, [dispatch])

   const username = useSelector(getUsername)
   const password = useSelector(getPassword)
   const isLoading = useSelector(getIsLoading)
   const errorMessage = useSelector(getError)

   const onSubmitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(loginByUsername({ password, username }))
   }, [dispatch, password, username])

   return (
      <form className={classNames(styles.LoginForm)} onSubmit={onSubmitHandler}>
         {errorMessage &&
            <span>
               {errorMessage}
            </span>
         }
         <Input
            type="text"
            className={styles.Input}
            onChange={onChangeUsername}
            placeholder='Введите имя'
            autoFocus={true}
            value={username}
         />
         <Input
            type="text"
            className={styles.Input}
            onChange={onChangePassword}
            placeholder='Введите пароль'
            value={password}
         />
         <Button type='submit' disabled={isLoading} className={styles.Button} theme={ThemeButton.OUTLINE}>
            Войти
         </Button>
      </form>
   )
})
