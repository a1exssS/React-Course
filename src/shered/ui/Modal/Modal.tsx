import { classNames } from 'shered/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
   children: React.ReactNode;
   className?: string;
   isOpen?: boolean;
   onClose?: () => void;
   lazy?: boolean;
}

const ANIMATION_DELAY = 150

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {

   const [isClosing, setIsClosing] = useState(false)
   const [isMounted, setIsMounted] = useState(false)
   const timerRef = useRef<number>()

   const closeHandler = useCallback(() => {
      if (onClose) {
         setIsClosing(true)
         timerRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
         }, ANIMATION_DELAY)
      }
   }, [onClose])

   const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
         closeHandler()
      }
   }, [closeHandler])

   const onContentClick = (e: React.MouseEvent) => {
      e.stopPropagation()
   }

   useEffect(() => {

      if (isOpen) {
         window.addEventListener('keydown', onKeyDown)
      }

      return () => {
         clearTimeout(timerRef.current);
         window.removeEventListener('keydown', onKeyDown)
      }
   }, [isOpen, onKeyDown])

   useEffect(() => {
      if (isOpen) {
         setIsMounted(true)
      }
   }, [isOpen])

   if (lazy && !isMounted) {
      return null
   }

   return (
      <Portal>
         <div className={classNames(styles.Modal, {
            [styles.opened]: isOpen,
            [styles.closing]: isClosing,
         }, [className])
         }>
            <div className={styles.overlay} onClick={closeHandler}>
               <div className={styles.box} onClick={onContentClick}>
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   )
}
