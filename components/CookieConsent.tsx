'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm mb-4 md:mb-0 md:mr-4">
              {`We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.`}
            </p>
            <div className="flex items-center justify-center flex-col sm:flex-row gap-2">
              <Link href="/privacy" className="text-sm underline whitespace-nowrap">
                Cookie Policy
              </Link>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
