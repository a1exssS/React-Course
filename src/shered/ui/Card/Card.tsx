import React, { HTMLAttributes } from 'react'
import styles from './Card.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: React.ReactNode
}

export const Card = ({ children, className, ...otherProps }: CardProps) => {
   return (
      <div className={classNames(styles.Card, {}, [className])} {...otherProps}>{children}</div>
   )
}
