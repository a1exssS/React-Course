import { classNames } from "shered/lib/classNames/classNames"
import cls from './Button.module.scss'
import { ButtonHTMLAttributes } from "react"

export enum ThemeButton {
   OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
}

export const Button = ({ className, children, theme, disabled, ...otherProps }: ButtonProps) => {
   return (
      <button disabled={disabled} className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
         {children}
      </button>
   )
}
