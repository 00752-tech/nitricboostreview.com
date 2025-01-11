'use client'

import { useState, useEffect } from 'react'
import { MapPin } from 'lucide-react'

export default function LocationIndicator() {
  const [country, setCountry] = useState('United States')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getLocation() {
      try {
        const response = await fetch('/api/location')
        const data = await response.json()
        setCountry(data.country)
      } catch (error) {
        console.error('Failed to fetch location:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getLocation()
  }, [])

  return (
    <div className="flex items-center text-sm text-gray-300">
      <MapPin 
        className={`
          w-4 h-4 mr-1 text-[#EA4335]
          ${isLoading ? 'animate-pulse' : 'animate-ping-slow'}
        `} 
      />
      {country}
    </div>
  )
}

