"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { maskTextAnimation } from '@/constants/maskText';

type Props = {
  children: React.ReactNode
  visibleValue?: number;
  fontSize: number;
}

export default function MaskText({ children, visibleValue = 0.75, fontSize }: Props) {

  const { ref, inView } = useInView({
    threshold: visibleValue,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      {
        <div className='overflow-hidden'>
          <motion.p 
          variants={maskTextAnimation} 
          initial="initial" 
          animate={inView ? "enter" : ""}
          style={{fontSize: fontSize}}
          className='font-bold'
          >{children}</motion.p>
        </div>
      }
    </div>
  )
}
