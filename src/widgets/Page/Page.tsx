import React, { MutableRefObject, useRef } from 'react'
import styles from './Page.module.scss'
import { classNames } from 'shered/lib/classNames/classNames';
import { useInfitniteScroll } from 'shered/lib/hooks/useInfitniteScroll/useInfitniteScroll';
import { useAppDispatch } from 'shered/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollPositionByPath, scrollHandlerActions } from 'features/ScrollHandler';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shered/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shered/lib/hooks/useThrottle/useThrottle';

interface PageProps {
   children: React.ReactNode;
   className?: string;
   onScrollEnd?: () => void;
   watchScrollPosition?: boolean;
}

export const Page = ({ children, className, onScrollEnd, watchScrollPosition = false }: PageProps) => {

   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
   const dispatch = useAppDispatch()
   const { pathname } = useLocation()
   const scrollPosition = useSelector(
      (state: StateSchema) => getScrollPositionByPath(state, pathname)
   )

   useInfitniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd
   })

   useInitialEffect(() => {
      if (watchScrollPosition) {
         wrapperRef.current.scrollTop = scrollPosition
      }
   })

   const onScrollHandler = useThrottle((e: React.UIEvent<HTMLElement>) => {
      console.log('scroll')
      if (watchScrollPosition) {
         dispatch(scrollHandlerActions.setScrollPosition({
            position: e.currentTarget.scrollTop, path: pathname
         }))
      }

   }, 1000)

   return (
      <section ref={wrapperRef} className={styles.section} onScroll={onScrollHandler}>
         <div className={classNames(styles.container, {}, [className])}>
            {children}
            <div ref={triggerRef} />
         </div>
      </section>
   )
}
