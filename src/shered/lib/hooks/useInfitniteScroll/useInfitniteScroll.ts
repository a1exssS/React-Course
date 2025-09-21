import { useEffect } from "react";

export interface useInfitniteScrollOptions {
   triggerRef: React.MutableRefObject<HTMLElement>;
   wrapperRef: React.MutableRefObject<HTMLElement>;
   callback?: () => void;

}
export function useInfitniteScroll({ callback, triggerRef, wrapperRef }: useInfitniteScrollOptions) {
   useEffect(() => {
      const wrapperElement = wrapperRef.current
      const triggerElement = triggerRef.current

      let observer: IntersectionObserver | null = null

      if (callback) {
         const options = {
            root: wrapperElement,
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 1.0,
         };

         observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
               callback()
            }
         }, options);
         observer.observe(triggerElement)

         return () => {
            if (observer && triggerElement) {
               observer.unobserve(triggerElement)
            }
         }

      }
   }, [wrapperRef, triggerRef, callback])
}