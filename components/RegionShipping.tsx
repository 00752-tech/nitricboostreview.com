'use client'

import { useState, useEffect } from 'react'
import { Truck, AlertCircle } from 'lucide-react'

interface ShippingInfo {
  [key: string]: {
    time: string;
    cost: string;
  };
}

const shippingInfo: ShippingInfo = {
  'United States': { time: '2-3 business days', cost: 'FREE' },
  'Canada': { time: '3-5 business days', cost: '$9.99' },
  'United Kingdom': { time: '5-7 business days', cost: '£7.99' },
  'Australia': { time: '7-10 business days', cost: 'AU$14.99' },
  'default': { time: '7-14 business days', cost: '$19.99' }
}

export default function RegionShipping() {
  const [location, setLocation] = useState({ country: 'United States' })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch('/api/location')
        if (!response.ok) {
          throw new Error('Failed to fetch location data')
        }
        const data = await response.json()
        setLocation(data)
        setError(null)
      } catch (error) {
        console.error('Failed to fetch location:', error)
        setError('Unable to determine your location. Showing default shipping information.')
      }
    }

    fetchLocation()
  }, [])

  const shipping = shippingInfo[location.country] || shippingInfo.default

  return (
    <div className="bg-secondary/50 p-6 rounded-lg flex items-start space-x-4 my-8">
      <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Shipping to {location.country}</h3>
        <p className="text-muted-foreground">Estimated delivery time: {shipping.time}</p>
        <p className="text-muted-foreground">Shipping cost: {shipping.cost}</p>
        {error && (
          <div className="mt-4 flex items-center text-yellow-500">
            <AlertCircle className="w-4 h-4 mr-2" />
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

