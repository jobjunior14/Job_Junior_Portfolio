// // useIntersection.js
import { useState, useEffect } from "react";

// const useIntersection = (element, delay = 3000, rootMargin = "0px") => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     let currentElement, timer;

//     const observer = new IntersectionObserver(
//       ([{ isIntersecting }]) => {
//         if (timer && !isIntersecting) clearTimeout(timer);

//         timer = setTimeout(() => {
//           setIsVisible(isIntersecting);
//         }, delay);
//       },

//       { rootMargin }
//     );

//     if (element?.current) {
//       currentElement = element.current;
//       observer.observe(currentElement);
//     }

//     return () => {
//       clearTimeout(timer);
//       observer.unobserve(currentElement);
//     };
//   }, [element, rootMargin]);

//   return isVisible;
// };

// export default useIntersection;


export default function useAnnimator (elemets) {

    useEffect(() => {
 
        elemets.forEach((el) => {

            const value = Object.values(el)[1];
            const key = Object.keys(el)[1]
            const observer = new IntersectionObserver (
                ([{isIntersecting}]) => {
                    
                    if (isIntersecting) {

                        el.ref?.current?.classList.add(`translate-${key}-[0%]`);
                        el.ref?.current?.classList.remove(`translate-${key}-[${value}%]`);
                        el.ref?.current?.classList.add ('opacity-100');
                        
                    } else {
                        
                        el.ref?.current?.classList.remove(`translate-${key}-[0%]`);
                        el.ref?.current?.classList.add(`translate-${key}-[${value}%]`);
                        el.ref?.current?.classList.remove ('opacity-100');
                    }
                }, {rootMargin: '0px'}
            );

            if (el.ref?.current) {
                observer.observe(el.ref.current);
            }

            return () => observer.unobserve(el.ref.current);
            
        });
    }, [elemets])

}
