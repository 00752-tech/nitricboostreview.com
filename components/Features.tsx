'use client'

import { motion } from 'framer-motion'
import { Zap, Dumbbell, Heart, Brain } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Increased Energy',
    description: 'Experience a surge in energy levels, allowing you to power through workouts and daily tasks with ease.'
  },
  {
    icon: Dumbbell,
    title: 'Enhanced Muscle Growth',
    description: 'Promote faster muscle growth and recovery, helping you achieve your fitness goals more efficiently.'
  },
  {
    icon: Heart,
    title: 'Improved Cardiovascular Health',
    description: 'Support better blood flow and heart health, contributing to overall cardiovascular wellness.'
  },
  {
    icon: Brain,
    title: 'Enhanced Cognitive Function',
    description: 'Boost mental clarity and focus, helping you stay sharp both in and out of the gym.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Nitric Boost Ultra?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our scientifically formulated blend offers a range of benefits to enhance your performance and overall well-being.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 text-center"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

