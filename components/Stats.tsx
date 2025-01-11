'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimatedNumber = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps
      let current = 0
      const increment = value / steps
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, stepDuration)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export default function Stats() {
  const stats = [
    { number: 53847, suffix: '+', label: 'Satisfied Customers' },
    { number: 97, suffix: '%', label: 'Success Rate' },
    { prefix: '', number: 24, suffix: '/7', label: 'Support Available' },
    { prefix: '', number: 30, suffix: ' Day', label: 'Money-Back Guarantee' },
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <AnimatedNumber 
                    value={stat.number} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </span>
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

