import { classNames } from 'shered/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shered/ui/ThemeSwitcher/ThemeSwitcher';
import { Button } from 'shered/ui/Button/Button';

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
         <Button data-testid='sidebar-toggle' onClick={onToggle}>toggle</Button>
         <div className={cls.asideFooter}>
            <ThemeSwitcher className='' />
         </div>
      </aside>
   )
}
