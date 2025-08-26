import { classNames } from 'shered/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react';
import { Button } from 'shered/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

   const [open, setOpen] = useState(false)

   const onShowModal = useCallback(() => {
      setOpen(true)
   }, [])

   const onCloseModal = useCallback(() => {
      setOpen(false)
   }, [])

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
}
