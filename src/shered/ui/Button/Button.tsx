import { classNames } from "shered/lib/classNames/classNames"
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, memo } from "react"

export enum ThemeButton {
   OUTLINE = 'outline',
   OUTLINE_INVERTED = 'outline-inverted',
   OUTLINE_RED = 'outline-red',
   OUTLINE_GREEN = 'outline-green',
   OUTLINE_CIRCLED = 'outline-circled',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
   isActive?: boolean;
}

export const Button = memo(({ className, children, theme, isActive, disabled, ...otherProps }: ButtonProps) => {
   return (
      <button
         disabled={disabled}
         className={classNames(
            cls.button,
            {},
            [className, theme && cls[isActive ? theme + '-active' : theme]]
         )}
         {...otherProps}
      >
         {children}
      </button>
   )
})
