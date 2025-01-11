import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

// Rate limiting configuration
const RATE_LIMIT = 50 // requests
const RATE_LIMIT_WINDOW = 60 * 60 // 1 hour in seconds

export async function GET() {
  // Remove the dynamic header usage
  const ip = 'unknown'

  try {
    // Check cache first
    const cachedData = await redis.get(`location:${ip}`)
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData as string))
    }

    // Implement rate limiting
    const rateLimitKey = `ratelimit:${ip}`
    const requests = await redis.incr(rateLimitKey)
    if (requests === 1) {
      await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW)
    }

    if (requests > RATE_LIMIT) {
      return NextResponse.json({
        error: 'Rate limit exceeded',
        country: 'United States',
        countryCode: 'US',
        region: 'California',
        city: 'San Francisco'
      }, { status: 429 })
    }

    // Call IP geolocation API
    const response = await fetch(`https://ipapi.co/json/`)
    const data = await response.json()

    const locationData = {
      country: data.country_name || 'United States',
      countryCode: data.country_code || 'US',
      region: data.region || 'California',
      city: data.city || 'San Francisco'
    }

    // Cache the result for 24 hours
    await redis.setex(`location:${ip}`, 24 * 60 * 60, JSON.stringify(locationData))

    return NextResponse.json(locationData)
  } catch (error) {
    console.error('Error fetching location data:', error)
    // Fallback to default values if API call fails
    return NextResponse.json({
      country: 'United States',
      countryCode: 'US',
      region: 'California',
      city: 'San Francisco'
    })
  }
}
