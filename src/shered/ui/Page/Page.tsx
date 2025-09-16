import React, { MutableRefObject, useRef } from 'react'
import styles from './Page.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';
import { useInfitniteScroll } from 'shered/lib/hooks/useInfitniteScroll/useInfitniteScroll';

interface PageProps {
   children: React.ReactNode;
   className?: string;
   onScrollEnd?: () => void;
}

export const Page = ({ children, className, onScrollEnd }: PageProps) => {

   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

   useInfitniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd
   })

   return (
      <section ref={wrapperRef} className={styles.section}>
         <div className={classNames(styles.container, {}, [className])}>
            {children}
            <div ref={triggerRef} />
         </div>
      </section>
   )
}
