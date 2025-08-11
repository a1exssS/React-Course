import { classNames } from 'shered/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shered/ui/ThemeSwitcher/ThemeSwitcher';

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

   const [collapsed, setCollapsed] = useState(false)

   const onToggle = () => {
      setCollapsed((e) => !e)
   }

   return (
      <aside className={classNames(cls.Asidebar, { [cls.collapsed]: collapsed }, [className])}>
         <button onClick={onToggle}>toggle</button>
         <div className={cls.asideFooter}>
            <ThemeSwitcher className='' />
         </div>
      </aside>
   )
}
