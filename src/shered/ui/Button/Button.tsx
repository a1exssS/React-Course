import { classNames } from "shered/lib/classNames/classNames"
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, memo } from "react"

export enum ThemeButton {
   OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
}

export const Button = memo(({ className, children, theme, disabled, ...otherProps }: ButtonProps) => {
   return (
      <button
         disabled={disabled}
         className={classNames(cls.button, {}, [className, theme && cls[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   )
})
