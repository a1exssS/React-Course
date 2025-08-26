import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shered/lib/classNames/classNames';
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
   className?: string;
   value?: string;
   onChange?: (value: string) => void;
   autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {

   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      autofocus,
      ...otherProps
   } = props

   const [isFocused, setIsFocused] = useState(false)
   const ref = useRef<HTMLInputElement>(null)

   useEffect(() => {
      if (autofocus) {
         setIsFocused(true)
         ref.current.focus()
      }
   }, [autofocus])


   const [watcherPosition, setWatcherPosition] = useState(0)

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
      setWatcherPosition(e.target.value.length)
   }

   const onBlur = () => {
      setIsFocused(false)
   }

   const onFocus = () => {
      setIsFocused(true)
   }

   const onSelect = (e: any) => {
      setWatcherPosition(e?.target.selectionStart || 0)
   }

   return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
         {placeholder &&
            <div className={styles.placeholder}>
               {`${placeholder}>`}
            </div>
         }
         <div className={styles.watcherWrapper}>
            <input
               ref={ref}
               type={type}
               className={styles.Input}
               value={value}
               onChange={onChangeHandler}
               onBlur={onBlur}
               onFocus={onFocus}
               onSelect={onSelect}
               autoFocus={autofocus}
               {...otherProps}
            />
            {
               isFocused &&
               <span className={styles.watcher} style={{ left: `${watcherPosition * 8.8}px` }} />
            }
         </div>
      </div>
   )
})