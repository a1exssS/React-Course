import { classNames } from 'shered/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'shered/ui/ThemeSwitcher/ThemeSwitcher';
import { Button } from 'shered/ui/Button/Button';
import ArrowLeft from 'shered/assets/icons/caret-left.svg'
import ArrowRight from 'shered/assets/icons/caret-right.svg'
import { AsideHeader } from '../AsideHeader/AsideHeader';
import { SidebarItemList } from '../../model/sidebarLinks';

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {

   const [collapsed, setCollapsed] = useState(false)

   const onToggle = () => {
      setCollapsed((e) => !e)
   }

   return (
      <aside data-testid='sidebar' className={classNames(cls.Asidebar, { [cls.collapsed]: collapsed }, [className])}>
         {SidebarItemList.map((el) => {
            return <AsideHeader item={el} key={el.path} collapsed={collapsed} />
         })}
         <div className={cls.asideFooter}>
            <Button data-testid='sidebar-toggle' onClick={onToggle}>
               {!collapsed ? <ArrowLeft /> : <ArrowRight />}
            </Button>
            <ThemeSwitcher />
         </div>
      </aside>
   )
})
