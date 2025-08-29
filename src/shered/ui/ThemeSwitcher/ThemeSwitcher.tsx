import { Theme, useTheme } from 'app/providers/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shered/lib/classNames/classNames'
import DarkTheme from 'shered/assets/icons/theme-dark.svg'
import LightTheme from 'shered/assets/icons/theme-light.svg'
import { Button } from '../Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
   const { toggleTheme, theme } = useTheme()
   return (
      <>
         <Button className={classNames(cls.button, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <DarkTheme /> : <LightTheme />}
         </Button>
      </>

   )
})
