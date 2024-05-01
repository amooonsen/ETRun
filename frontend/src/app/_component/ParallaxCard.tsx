"use client"

import { TypeBenefitInfo } from "@/types/TypeCommon";

interface ParallaxCardProps extends TypeBenefitInfo {
  i: number; // 추가할 인덱스 프로퍼티
}

export default function ParallaxCard({i, title, description, src, link, color}:ParallaxCardProps) {
  return (
    <article>
      {i}
      {description}
      {src}
      {link}
      {color}
    </article>
  )
}
