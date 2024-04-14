// useIntersection.js
import { useState, useEffect } from "react";

const useIntersection = (element, delay = 3000, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentElement, timer;

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (timer && !isIntersecting) clearTimeout(timer);

        timer = setTimeout(() => {
          setIsVisible(isIntersecting);
        }, delay);
      },
      { rootMargin }
    );

    if (element?.current) {
      currentElement = element.current;
      observer.observe(currentElement);
    }

    return () => {
      clearTimeout(timer);
      observer.unobserve(currentElement);
    };
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;
