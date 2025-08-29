import { classNames } from 'shered/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react';
import { Button } from 'shered/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';

interface NavbarProps {
   className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {

   const [open, setOpen] = useState(false)
   const isAuth = useSelector(getAuthData)
   const dispatch = useDispatch()

   const onShowModal = useCallback(() => {
      setOpen(true)
   }, [])

   const onCloseModal = useCallback(() => {
      setOpen(false)
   }, [])

   const onLogout = useCallback(() => {
      dispatch(userActions.setLogout())
   }, [dispatch])

   if (isAuth) {
      return (
         <nav className={classNames(cls.nav, {}, [className])}>
            <div className={cls.links}>
               <Button onClick={onLogout} style={{ color: "var(--inverted-primary-color)" }}>
                  Выйти
               </Button>
            </div>
         </nav>
      )
   }

   return (
      <nav className={classNames(cls.nav, {}, [className])}>
         <div className={cls.links}>
            <Button onClick={onShowModal} style={{ color: "var(--inverted-primary-color)" }}>
               Войти
            </Button>
         </div>
         <LoginModal isOpen={open} onClose={onCloseModal} />
      </nav>
   )
})
