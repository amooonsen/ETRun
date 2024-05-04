import React from 'react'
import { LayoutProps } from '@/types/Props'

export default function ContentsSection({ children, layout, gap, isFull }: LayoutProps) {
  const fullHeightClass = isFull ? 'min-h-screen' : '';
  const gapClasses = gap && (gap.columnGap || gap.rowGap)
    ? `gap-y-${gap.rowGap} gap-x-${gap.columnGap}`
    : '';
  const gridClasses = layout === 'grid'
    ? `grid grid-cols-8 grid-flow-row auto-rows-max`
    : '';
  const flexClasses = layout === 'flex' ? 'flex' : '';

  return (
    <section
      className={`relative w-full text-[#ddd] ${fullHeightClass} ${gridClasses} ${flexClasses} ${gapClasses}`}>
      {children}
    </section>
  )
}
