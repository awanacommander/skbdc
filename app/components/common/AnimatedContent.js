"use client"
import { useInView } from 'react-intersection-observer';

export const AnimatedContent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 100,
  });

  return (
    <div ref={ref} className={`fade-up ${inView ? 'show' : ''}`}>
      {children}
    </div>
  );
};