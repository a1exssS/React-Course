import React, { useCallback } from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './Tabs.module.scss'
import { Button, ThemeButton } from '../Button/Button';

export interface TabItem<T extends string> {
   value: T;
   content: React.ReactNode;
}

interface TabsProps<T extends string> {
   className?: string;
   tabs: TabItem<T>[];
   value: T;
   onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>({
   onTabClick,
   tabs,
   value,
   className,
}: TabsProps<T>) => {

   const onClickHandler = useCallback(
      (tab: TabItem<T>) => () => {
         onTabClick(tab)
      },
      [onTabClick]
   )

   return (
      <div className={classNames(styles.Tabs, {}, [className])}>
         {tabs.map((tab) => (
            <Button
               isActive={tab.value === value}
               theme={ThemeButton.OUTLINE_CIRCLED}
               className={styles.Tab}
               key={tab.value}
               onClick={onClickHandler(tab)}
            >
               {tab.content}
            </Button>
         ))}
      </div>
   )
}
