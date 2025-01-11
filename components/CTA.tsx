'use client'

import { motion } from 'framer-motion'
import { Star, Package2, Truck, ShieldCheck } from 'lucide-react'
import { Button } from './ui/button'

export default function CTA() {
  const handleGetStarted = () => {
    window.location.href = '/api/male-validity'
  }
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient animate-gradient" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Try Nitric Boost Ultra?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Based on our thorough review and customer feedback, Nitric Boost Ultra has proven to be an effective choice for those seeking to enhance their performance and confidence naturally.
          </p>
          <Button className="px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center bg-gradient-to-r from-[#EC4899] to-[#3B82F6] text-white hover:shadow-lg transition-all duration-300" onClick={handleGetStarted}>
            Get Started Now
          </Button>
          <div className="mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-white text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid gap-6">
              <div className="flex items-start space-x-4 text-left">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Package2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg mb-2">Is the packaging discreet?</h4>
                  <p className="text-white/80 leading-relaxed">
                    Yes, we understand the importance of privacy. All Nitric Boost Ultra orders are shipped in plain, unmarked packaging with no indication of the contents inside.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg mb-2">Do you offer free shipping?</h4>
                  <p className="text-white/80 leading-relaxed">
                    We offer free shipping on all U.S. orders. International shipping rates may vary.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg mb-2">Satisfaction Guarantee</h4>
                  <p className="text-white/80 leading-relaxed">
                   {` We offer a 30-day money-back guarantee. If you're not completely satisfied with Nitric Boost Ultra, simply return the unused portion for a full refund.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

