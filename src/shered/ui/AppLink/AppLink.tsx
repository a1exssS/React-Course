import React from 'react'
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shered/lib/classNames/classNames';
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
   children: React.ReactNode;
   className?: string;
   theme?: AppLinkTheme
}

export enum AppLinkTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   BUTTON_LIKE = 'button_like'
}

export const AppLink = ({ className, children, theme = AppLinkTheme.PRIMARY, to, ...otherProps }: AppLinkProps) => {

   return (
      <Link to={to} {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
         {children}
      </Link>
   )
}
