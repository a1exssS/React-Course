import { classNames } from 'shered/lib/classNames/classNames';
import styles from './Avatar.module.scss'
import { CSSProperties, ImgHTMLAttributes, useMemo } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
   src?: string;
   className?: string;
   size?: number;
}

export const Avatar = ({ className, src, alt, size, ...otherProps }: AvatarProps) => {

   const stylesImage = useMemo<CSSProperties>(() => {
      return {
         width: size,
         height: size
      }
   }, [size])

   return (
      <img
         src={src}
         alt={alt}
         style={stylesImage}
         className={classNames(styles.Avatar, {}, [className])}
         {...otherProps}
      />
   )
}
