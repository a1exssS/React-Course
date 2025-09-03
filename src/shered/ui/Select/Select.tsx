import React, { ChangeEvent, memo, useCallback, useMemo } from 'react'
import { classNames } from 'shered/lib/classNames/classNames'
import styles from './Select.module.scss'

interface SelectOption {
   value?: string;
   content?: string;
}

interface SelectProps {
   className?: string;
   label?: string;
   options?: SelectOption[];
   value?: string;
   onChange?: (value: string) => void;
   readonly?: boolean;
}

export const Select = memo(({ className, label, onChange, options, value, readonly }: SelectProps) => {

   const optionList = useMemo(() => {
      return options?.map((el) => (
         <option className={styles.option} value={el.value} key={el.value}>{el.content}</option>
      ))
   }, [options])

   const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
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
})
