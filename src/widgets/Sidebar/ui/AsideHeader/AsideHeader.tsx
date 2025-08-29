import { AppLink, AppLinkTheme } from 'shered/ui/AppLink/AppLink'
import cls from './SidebarItems.module.scss'
import { SidebarItemType } from '../../model/sidebarLinks'
import { memo } from 'react';
import { classNames } from 'shered/lib/classNames/classNames';

interface SidebarItems {
   item: SidebarItemType;
   collapsed: boolean;
}

export const AsideHeader = memo(({ item, collapsed }: SidebarItems) => {
   return (
      <div className={classNames(cls.asideHeader, { [cls.collapsed]: collapsed })}>

         <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
         >
            <item.Icon />
            <span className={classNames(cls.linkText, { [cls.collapsed]: collapsed })}>
               {item.text}
            </span>
         </AppLink>
      </div>

   )
})
