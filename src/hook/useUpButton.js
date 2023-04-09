import { useEffect, useState } from 'react';

export const useUpButton = () => {
  const [isShownScrollButton, setIsShownScrollButton] = useState(false);

  const handleScroll = ({ currentTarget: { scrollY } }) => {
    setIsShownScrollButton(scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    onScrollToTop,
    isShownScrollButton,
  };
}
