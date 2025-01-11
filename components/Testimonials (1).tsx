'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John D.',
    role: 'Fitness Enthusiast',
    content: 'Nitric Boost Ultra has been a game-changer for my workouts. I've noticed a significant increase in my energy levels and muscle pump. Highly recommended!',
    avatar: '/placeholder.svg?height=80&width=80',
    rating: 5
  },
  {
    name: 'Sarah M.',
    role: 'Professional Athlete',
    content: 'As a professional athlete, I'm always looking for safe and effective supplements. Nitric Boost Ultra has improved my endurance and recovery time. It's now a staple in my training regimen.',
    avatar: '/placeholder.svg?height=80&width=80',
    rating: 5
  },
  {
    name: 'Mike R.',
    role: 'Bodybuilder',
    content: 'I've tried many nitric oxide boosters, but Nitric Boost Ultra stands out. The muscle pumps are incredible, and I've seen noticeable gains in my muscle mass. This product delivers!',
    avatar: '/placeholder.svg?height=80&width=80',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what users of Nitric Boost Ultra have experienced.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

