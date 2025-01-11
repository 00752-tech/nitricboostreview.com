'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is Nitric Boost Ultra?",
    answer: "Nitric Boost Ultra is a scientifically formulated nitric oxide booster designed to enhance workout performance, increase energy levels, and improve muscle growth. It works by promoting better blood flow and nutrient delivery to your muscles."
  },
  {
    question: "How do I take Nitric Boost Ultra?",
    answer: "For best results, take 2 capsules of Nitric Boost Ultra with water approximately 30-45 minutes before your workout. On non-training days, you can take it in the morning with breakfast. Always follow the recommended dosage on the product label."
  },
  {
    question: "Are there any side effects?",
    answer: "Nitric Boost Ultra is made with natural ingredients and is generally well-tolerated. However, as with any supplement, some individuals may experience mild side effects such as headaches or digestive discomfort. If you experience any adverse effects, discontinue use and consult with a healthcare professional."
  },
  {
    question: "How long does it take to see results?",
    answer: "Many users report feeling increased energy and improved pumps during their workouts within the first week of use. However, for optimal results, we recommend consistent use for at least 4-6 weeks, combined with regular exercise and a balanced diet."
  },
  {
    question: "Is Nitric Boost Ultra suitable for vegetarians/vegans?",
    answer: "Yes, Nitric Boost Ultra is formulated with plant-based ingredients and is suitable for both vegetarians and vegans. We do not use any animal products in our supplement."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about Nitric Boost Ultra and its benefits.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-4 bg-gray-800 rounded-lg focus:outline-none"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-700 rounded-b-lg p-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

