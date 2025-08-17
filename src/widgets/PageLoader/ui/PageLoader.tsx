import { classNames } from 'shered/lib/classNames/classNames';
import { Spiner } from 'shered/ui/Spiner/Spiner';
import style from './PageLoader.module.scss'

interface PageLoaderProps {
   className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
   return (
      <div className={classNames(style.Loader, {}, [className])}>
         <Spiner />
      </div>
   )
}
