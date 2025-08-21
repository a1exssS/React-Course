import { classNames } from 'shered/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <nav className={classNames(cls.nav, {}, [className])}>
         <div className={cls.links}>
            /
         </div>
      </nav>
   )
}
