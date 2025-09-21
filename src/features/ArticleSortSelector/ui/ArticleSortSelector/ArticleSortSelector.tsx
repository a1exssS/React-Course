import { Select, SelectOption } from 'shered/ui/Select/Select'
import styles from './ArticleSortSelector.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { SortOrder } from 'shered/types/SortOrder';
import { ArticleSortField } from 'entities/Article';

interface ArticleSortSelectorProps {
   className?: string;
   sort?: ArticleSortField;
   order?: SortOrder;
   onChangeOrder: (value: SortOrder) => void;
   onChangeSort: (value: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({
   className,
   onChangeOrder,
   onChangeSort,
   order,
   sort
}: ArticleSortSelectorProps) => {

   const orderOptions = useMemo<SelectOption<SortOrder, string>[]>(() => [
      {
         value: 'asc',
         content: 'возрастанию'
      },
      {
         value: 'desc',
         content: 'убыванию'
      },
   ], [])

   const sortFieldOptions = useMemo<SelectOption<ArticleSortField, string>[]>(() => [
      {
         value: ArticleSortField.CREATED,
         content: 'дате создания'
      },
      {
         value: ArticleSortField.TITLE,
         content: 'названию'
      },
      {
         value: ArticleSortField.VIEWS,
         content: 'просмотрам'
      },
   ], [])

   return (
      <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
         <Select
            label={'Сортировать ПО'}
            className={styles.filter}
            options={sortFieldOptions}
            onChange={onChangeSort}
            value={sort}
         />
         <Select
            label={'по'}
            className={styles.filter}
            options={orderOptions}
            onChange={onChangeOrder}
            value={order}
         />

      </div>
   )
})
