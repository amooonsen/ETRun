import Image from 'next/image'
import React from 'react'

import courseBackground from '../../../public/images/seoul_background02.jpg'
export default function page() {
  return (
    <main className="relative min-w-full min-h-screen">
      <Image
        className="!fixed z-[-1] object-cover"
        aria-hidden
        src={courseBackground}
        alt="코스 배경 이미지"
        fill
        placeholder='blur'
      />
    </main>
  )
}
