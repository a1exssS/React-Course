import { classNames } from 'shered/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shered/ui/ThemeSwitcher/ThemeSwitcher';
import { Button } from 'shered/ui/Button/Button';
import ArrowLeft from 'shered/assets/icons/caret-left.svg'
import ArrowRight from 'shered/assets/icons/caret-right.svg'
import HomeIcon from 'shered/assets/icons/home.svg'
import AboutIcon from 'shered/assets/icons/file.svg'
import { AppLink, AppLinkTheme } from 'shered/ui/AppLink/AppLink';
import { RoutePaths } from 'shered/config/routeConfig/routeConfig';

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

   const [collapsed, setCollapsed] = useState(false)

   const onToggle = () => {
      setCollapsed((e) => !e)
   }

   return (
      <aside data-testid='sidebar' className={classNames(cls.Asidebar, { [cls.collapsed]: collapsed }, [className])}>
         <div className={cls.asideHeader}>
            <AppLink to={RoutePaths.main} theme={AppLinkTheme.SECONDARY} className={cls.link}>
               <HomeIcon />
               <span className={cls.linkText}>
                  Главная
               </span>
            </AppLink>
            <AppLink to={RoutePaths.about} theme={AppLinkTheme.SECONDARY} className={cls.link}>
               <AboutIcon />
               <span className={cls.linkText}>
                  О сайте
               </span>
            </AppLink>
         </div>
         <div className={cls.asideFooter}>
            <Button data-testid='sidebar-toggle' onClick={onToggle}>
               {!collapsed ? <ArrowLeft /> : <ArrowRight />}
            </Button>
            <ThemeSwitcher />
         </div>
      </aside>
   )
}
