import { CSSProperties } from 'react'
import styles from './Skeleton.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';

interface SkeletonProps {
   className?: string;
   height?: string | number;
   width?: string | number;
   maxWidth?: string | number;
   maxHeight?: string | number;
   borderRadius?: string;
}

export const Skeleton = ({
   className,
   borderRadius,
   height,
   width,
   maxHeight,
   maxWidth
}: SkeletonProps) => {

   const cssStyles: CSSProperties = {
      width,
      height,
      maxHeight,
      maxWidth,
      borderRadius
   }

   return (
      <div style={cssStyles} className={classNames(styles.Skeleton, {}, [className])}>

      </div>
   )
}
