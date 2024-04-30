"use client"

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from "@/components/Intro";

export default function IntroProvider() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const handleLoading = () => {
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
        document.body.style.overflow = '';
      }, 2000);
    };

    handleLoading();
    return () => {
      document.body.style.overflow = '';
      document.body.style.cursor = 'default';
    };
  }, []);
  return (
    <AnimatePresence mode='wait'>
      {isLoading && <Intro />}
    </AnimatePresence>
  )
}
