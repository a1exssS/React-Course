import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { classNames } from 'shered/lib/classNames/classNames'
import styles from './Select.module.scss'

export interface SelectOption<T, K> {
   value?: T;
   content?: K;
}

interface SelectProps<T extends string> {
   className?: string;
   label?: string;
   options?: SelectOption<string, string>[];
   value?: T;
   onChange?: (value: T) => void;
   readonly?: boolean;
}

export const Select = <T extends string>(
   { className, label, onChange, options, value, readonly }: SelectProps<T>
) => {

   const optionList = useMemo(() => {
      return options?.map((el) => (
         <option className={styles.option} value={el.value} key={el.value}>{el.content}</option>
      ))
   }, [options])

   const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T)
   }, [onChange])

   return (
      <div className={classNames(styles.Wrapper, {}, [className])}>
         {label &&
            <span className={classNames(styles.label)}>
               {`${label}>`}
            </span>
         }
         <select
            disabled={readonly}
            className={styles.select}
            value={value}
            onChange={onChangeHandler}
         >
            {optionList}
         </select>
      </div>
   )
}
