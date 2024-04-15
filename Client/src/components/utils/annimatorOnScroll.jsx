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

            let timer;
            let currentElement = el.ref.current;

            const value = Object.values(el)[1];
            const key = Object.keys(el)[1]
            const observer = new IntersectionObserver (
                ([{isIntersecting}]) => {

                    if (timer && !isIntersecting) clearTimeout(timer)
                    
                    timer = setTimeout(() => {
                        
                        if (isIntersecting) {
    
                            currentElement.classList.add(`translate-${key}-[0%]`, 'opacity-100');
                            currentElement.classList.remove(`translate-${key}-[${value}%]`);
                            
                        } else {
                            
                            currentElement.classList.remove(`translate-${key}-[0%]`, 'opacity-100');
                            currentElement.classList.add(`translate-${key}-[${value}%]`);
                        }
                    }, 100);

                }, {rootMargin: '0px'}
            );

            if (el.ref?.current) {
                observer.observe(currentElement);
            }

            return () => {
                if (timer) clearTimeout(timer)
                observer.unobserve(el.ref.current);
            }
            
        });
    }, [elemets])

}
