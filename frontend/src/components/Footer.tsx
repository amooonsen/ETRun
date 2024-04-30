"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function Footer() {
  const container = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  })
  const y = useTransform(scrollYProgress, [0, 1], [-230, 0])
  return (
    <footer id='footer' ref={container}>
      <div className="h-[300px] bg-black overflow-hidden">
        <motion.div style={{ y }} className="h-full flex items-end justify-between py-10 px-24 bg-black text-white">
          <div className="">
            <blockquote>
              {`"The miracle isn't that I finished. The miracle is that I had the courage to start.`}
            </blockquote>
          </div>
          <div className="">
            <address className='text-[14px] not-italic'>Contact: newabekar@naver.com</address>
            <small>© 2024 Cho Kyung Mun. All Rights Reserved.</small>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
