import { classNames } from 'shered/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import { AppLink, AppLinkTheme } from 'shered/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shered/ui/ThemeSwitcher/ThemeSwitcher';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <nav className={classNames(cls.nav, {}, [className])}>
         <ThemeSwitcher />
         <div className={cls.links}>
            <AppLink to='/' theme={AppLinkTheme.SECONDARY} className={cls.link}>Главная</AppLink>
            <AppLink to='/about' theme={AppLinkTheme.SECONDARY} className={cls.link}>О сайте</AppLink>
         </div>
      </nav>
   )
}
