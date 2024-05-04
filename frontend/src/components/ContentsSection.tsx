

import React from 'react'
import { LayoutProps } from '@/types/Props'

import { motion } from 'framer-motion';

export default function ContentsSection({ children, layout, gap, isFull, isTransition }: LayoutProps) {
  const fullHeightClass = isFull ? 'min-h-screen' : '';
  const gapClasses = gap && (gap.columnGap || gap.rowGap)
    ? `gap-y-${gap.rowGap} gap-x-${gap.columnGap}`
    : '';
  const gridClasses = layout === 'grid'
    ? `grid grid-cols-8 grid-flow-row auto-rows-max`
    : '';
  const flexClasses = layout === 'flex' ? 'flex' : '';

  return (
    <>
      <section
        className={`relative w-full text-[#ddd] ${fullHeightClass} ${gridClasses} ${flexClasses} ${gapClasses}`}>
        {children}
        {
          isTransition &&
          <motion.div
            aria-hidden
            className='bg-black absolute inset-0'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        }
      </section>
    </>
  )
}
