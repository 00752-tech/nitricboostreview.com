'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

interface AnimationProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

export function AnimatedImage({ src, alt, width, height, priority = false }: AnimationProps) {
  const [isClient, setIsClient] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div ref={ref} className="relative">
      {(inView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow-lg"
          priority={priority}
        />
      )}
    </div>
  )
}

export default function AnimatedSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(11)].map((_, i) => (
            <AnimatedImage
              key={i}
              src={`/animations/Nitric-Boost-${String(i + 1).padStart(2, '0')}.gif`}
              alt={`Nitric Boost Animation ${i + 1}`}
              width={400}
              height={300}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

