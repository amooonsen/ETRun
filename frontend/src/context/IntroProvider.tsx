"use client"

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from "@/components/Intro";

export default function IntroProvider() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0);
    }, 2000);
  }, [])
  return (
    <AnimatePresence mode='wait'>
      {isLoading && <Intro />}
    </AnimatePresence>
  )
}
