import React, { useCallback } from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './Tabs.module.scss'
import { Button, ThemeButton } from '../Button/Button';

export interface TabItem {
   value: string;
   content: React.ReactNode
}

interface TabsProps {
   className?: string;
   tabs: TabItem[];
   value: string;
   onTabClick: (tab: TabItem) => void
}

export const Tabs = ({ onTabClick, tabs, value, className }: TabsProps) => {

   const onClickHandler = useCallback((tab: TabItem) => {
      return () => {
         onTabClick(tab)
      }
   }, [onTabClick])

   return (
      <div className={classNames(styles.Tabs, {}, [className])}>
         {tabs.map((tab) => {
            return <Button
               isActive={tab.value === value ? true : false}
               theme={ThemeButton.OUTLINE_CIRCLED}
               className={styles.Tab}
               key={tab.value}
               onClick={onClickHandler(tab)}
            >
               {tab.content}
            </Button>
         })}
      </div>
   )
}
