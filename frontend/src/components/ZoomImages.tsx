"use client";

import Image from 'next/image'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

// assets
import Image01 from '../../public/images/running_image01.jpg'
import Image02 from '../../public/images/running_image02.jpg'
import Image03 from '../../public/images/running_image03.jpg'
import Image04 from '../../public/images/running_image04.jpg'

export default function ZoomImages() {
  const wrapper = useRef(null)

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Image01,
      scale: scale4
    },
    {
      src: Image02,
      scale: scale5
    },
    {
      src: Image03,
      scale: scale6
    },
    {
      src: Image04,
      scale: scale5
    },
    {
      src: Image02,
      scale: scale6
    },
    {
      src: Image02,
      scale: scale8
    },
    {
      src: Image02,
      scale: scale9
    }
  ]


  return (
    <div ref={wrapper} className='wrapper mt-20' aria-hidden>
      <div className='sticky'>
        {
          pictures.map(({ src, scale }, index) => (
            <motion.div key={index} style={{ scale }} className='el'>
              <div className='imageContainer'>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder='blur'
                  loading='lazy'
                />
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}
