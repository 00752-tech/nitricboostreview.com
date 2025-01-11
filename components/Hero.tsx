'use client'

import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Cookies from 'js-cookie'
import PersonalizedCTA from './PersonalizedCTA'
import { Button } from './ui/button'

interface DynamicContent {
  headline: string;
  subheadline: string;
}

const contentByAgeGroup: Record<string, DynamicContent> = {
  'young-adult': {
    headline: "Boost Your Performance and Confidence",
    subheadline: "Experience enhanced stamina and vitality with our cutting-edge formula"
  },
  'middle-aged': {
    headline: "Revitalize Your Intimate Life",
    subheadline: "Rediscover passion and performance with our scientifically-backed solution"
  },
  'senior': {
    headline: "Maintain Your Vigor at Any Age",
    subheadline: "Enjoy a fulfilling intimate life with our gentle yet effective formula"
  }
}

const referralContent: Record<string, string> = {
  'facebook': "Discover the Facebook-Exclusive ED Solution",
  'twitter': "The Twitter Community's Favorite Performance Booster",
  'google': "Google's Top-Rated ED Performance Enhancer",
  'email': "Exclusive Offer: Enhance Your Intimate Life Today"
}

function DynamicHero() {
  const [dynamicContent, setDynamicContent] = useState<DynamicContent>({
    headline: "Enhance Your Intimate Performance Naturally",
    subheadline: "Experience improved confidence, enhanced stamina, and better intimate experiences with Nitric Boost Ultra - the leading ED performance booster reviewed for 2025."
  })
  const [location, setLocation] = useState({ country: 'United States', region: '' })
  const searchParams = useSearchParams()

  useEffect(() => {
    async function fetchUserData() {
      try {
        const [segmentResponse, locationResponse] = await Promise.all([
          fetch('/api/user-segment'),
          fetch('/api/location')
        ])
        const segmentData = await segmentResponse.json()
        const locationData = await locationResponse.json()

        if (segmentData.ageGroup && contentByAgeGroup[segmentData.ageGroup]) {
          setDynamicContent(contentByAgeGroup[segmentData.ageGroup])
        }
        setLocation(locationData)
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      }
    }

    fetchUserData()
  }, [])

  useEffect(() => {
    // Check for URL parameters
    const source = searchParams.get('source')
    const keyword = searchParams.get('keyword')

    // Check for cookies
    const cookieSource = Cookies.get('referral_source')
    const cookieKeyword = Cookies.get('search_keyword')

    if (source) {
      Cookies.set('referral_source', source, { expires: 30 })
    }
    if (keyword) {
      Cookies.set('search_keyword', keyword, { expires: 30 })
    }

    // Prioritize URL parameters over cookies
    const finalSource = source || cookieSource
    const finalKeyword = keyword || cookieKeyword

    if (finalSource && referralContent[finalSource]) {
      setDynamicContent(prevContent => ({
        ...prevContent,
        headline: referralContent[finalSource]
      }))
    } else if (finalKeyword) {
      setDynamicContent(prevContent => ({
        ...prevContent,
        headline: `Boost Your ${finalKeyword} Performance with Nitric Boost Ultra`
      }))
    }
  }, [searchParams])

  const handleGetStarted = () => {
    window.location.href = '/api/male-validity'
  }




  return (
    <section className="pt-32 pb-20 px-6 hero-gradient">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium animate-pulse">
              New Formula for 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {dynamicContent.headline}
          </h1>
          <p className="text-xl mb-4 text-foreground/80 max-w-xl">
            {dynamicContent.subheadline}
          </p>
          <p className="text-lg mb-8 text-primary font-semibold">
            Now available in {location.country}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <PersonalizedCTA />
            <Button
              className="w-full sm:w-auto px-8 py-8 rounded-full text-lg font-semibold inline-flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 transition-colors" onClick={handleGetStarted}
            >
              Get Started Now
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
            <Image 
              src="https://getnitricboost.com/images/affiliate/image7.webp" 
              alt="Nitric Boost Ultra Product - Best ED Performance Booster" 
              width={600} 
              height={600} 
              className="relative animate-float rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicHero />
    </Suspense>
  )
}
