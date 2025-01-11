'use client'

import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [subscribers, setSubscribers] = useState<string[]>([])

  useEffect(() => {
    const storedSubscribers = localStorage.getItem('newsletter_subscribers')
    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (subscribers.includes(email)) {
      setStatus('error')
      return
    }

    const updatedSubscribers = [...subscribers, email]
    localStorage.setItem('newsletter_subscribers', JSON.stringify(updatedSubscribers))
    setSubscribers(updatedSubscribers)
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on ED Performance Breakthroughs
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Subscribe to our newsletter for the latest research, tips, and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-300">Thank you for subscribing!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-300">This email is already subscribed.</p>
          )}
         
        </div>
      </div>
    </section>
  )
}

