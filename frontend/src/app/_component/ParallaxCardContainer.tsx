import React from 'react'

// constnats
import { benefitsInfo } from '@/constants/CardText'

// component
import ParallaxCard from './ParallaxCard'

// types
import { TypeBenefitInfo } from '@/types/TypeCommon'

export default function ParallaxCardContainer() {
  return (
    <div>
      {
        benefitsInfo.map((info:TypeBenefitInfo, i:number) => {
          return <ParallaxCard
            key={`card_${i}`}
            {...info} 
            i={i} />
        })
      }
    </div>
  )
}
