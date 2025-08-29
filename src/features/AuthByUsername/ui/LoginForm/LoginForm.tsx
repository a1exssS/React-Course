import { useSelector } from 'react-redux'
import styles from './LoginForm.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import { Button, ThemeButton } from 'shered/ui/Button/Button'
import { Input } from 'shered/ui/Input/Input'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/selectors/getError/getError'
import { DynamicModuleLoader, ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch'

const initialReducers: ReducersList = {
   login: loginReducer
}

interface LoginFormProps {
   onSuccess: () => void;
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {

   const dispatch = useAppDispatch()
   const username = useSelector(getUsername)
   const password = useSelector(getPassword)
   const isLoading = useSelector(getIsLoading)
   const errorMessage = useSelector(getError)

   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value))
   }, [dispatch])
   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value))
   }, [dispatch])


   const onSubmitHandler = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await dispatch(loginByUsername({ password, username }))
      if (result.meta.requestStatus === 'fulfilled') {
         onSuccess()
      }
   }, [dispatch, password, username, onSuccess])

   return (
      <DynamicModuleLoader reducers={initialReducers}>

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
      </DynamicModuleLoader>
   )
})

export default LoginForm