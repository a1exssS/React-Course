import { classNames } from 'shered/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shered/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button } from 'shered/ui/Button/Button';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

   const [open, setOpen] = useState(false)

   const onToggleModal = useCallback(() => {
      setOpen((e) => !e)
   }, [])

   return (
      <nav className={classNames(cls.nav, {}, [className])}>
         <div className={cls.links}>
            <Button onClick={onToggleModal} style={{ color: "var(--inverted-primary-color)" }}>
               Войти
            </Button>
         </div>
         <Modal isOpen={open} onClose={() => setOpen((e) => !e)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem eaque illo officia hic quis explicabo, consectetur libero temporibus, nam porro ea saepe dolores illum eveniet voluptate! Tenetur, harum quo?
         </Modal>
      </nav>
   )
}
