import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initialize without document access

  useEffect(() => {
    // Update state after the component has mounted and document is available
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(hasDarkClass);

    const observer = new MutationObserver(() => {
      const updatedHasDarkClass = document.documentElement.classList.contains('dark');
      setIsDarkMode(updatedHasDarkClass);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return isDarkMode ? 'dark' : 'light';
};

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMediaChange = (event) => {
      setMatches(event.matches);
    };

    // Set the initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', handleMediaChange);

    // Cleanup listener on unmount
    return () => mediaQueryList.removeEventListener('change', handleMediaChange);
  }, [query]);

  return matches;
}

const useDebounceValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout if the value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useScroll = (timeout = 100) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const debouncedValue = useDebounceValue(scroll, timeout)

  return debouncedValue;
};
