import { AritcleTypes } from 'entities/Article'
import React, { useCallback, useMemo } from 'react'
import { TabItem, Tabs } from 'shered/ui/Tabs/Tabs'

interface ArticleTypeTabsProps {
   value: AritcleTypes;
   onChangeType: (value: AritcleTypes) => void
}

export const ArticleTypeTabs = ({ onChangeType, value }: ArticleTypeTabsProps) => {

   const typeTabs = useMemo<TabItem[]>(() => [
      { value: AritcleTypes.ALL, content: 'Все' },
      { value: AritcleTypes.IT, content: 'Айти' },
      { value: AritcleTypes.SCIENCE, content: 'Наука' },
      { value: AritcleTypes.ECONOMICS, content: 'Экономика' },
   ], [])

   const setType = useCallback((tab: TabItem) => {
      onChangeType(tab.value as AritcleTypes)
   }, [onChangeType])

   return (
      <Tabs
         tabs={typeTabs}
         value={value}
         onTabClick={setType}
      />
   )
}
