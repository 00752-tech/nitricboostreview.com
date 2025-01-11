'use client'

import { useState, useEffect } from 'react'
import { User, Star } from 'lucide-react'

interface Testimonial {
  name: string;
  age: number;
  quote: string;
  rating: number;
  region: string;
}

const allTestimonials: Testimonial[] = [
  {
    name: "Zack R.",
    age: 52,
    quote: "Nitric Boost Ultra has completely transformed my intimate life. I feel more confident and energized, and my performance has significantly improved.",
    rating: 5,
    region: "United States"
  },
  {
    name: "Axel S.",
    age: 45,
    quote: "I was skeptical at first, but after a month of use, I've noticed a remarkable enhancement in my erectile function and overall stamina. My wife has definitely noticed the difference too.",
    rating: 5,
    region: "Canada"
  },
  {
    name: "Jett K.",
    age: 58,
    quote: "This ED performance booster has truly delivered on its promises. The natural ingredients work wonders for blood flow and energy levels. I'm a customer for life.",
    rating: 5,
    region: "United Kingdom"
  },
  {
    name: "Oliver M.",
    age: 49,
    quote: "As an Aussie dealing with the stresses of daily life, Nitric Boost Ultra has been a game-changer. It's given me back the confidence I thought I'd lost.",
    rating: 5,
    region: "Australia"
  }
]

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(allTestimonials)
  const [userRegion, setUserRegion] = useState<string>('United States')

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch('/api/location')
        const data = await response.json()
        setUserRegion(data.country)
      } catch (error) {
        console.error('Failed to fetch location:', error)
      }
    }

    fetchLocation()
  }, [])

  useEffect(() => {
    const regionalTestimonial = allTestimonials.find(t => t.region === userRegion)
    const otherTestimonials = allTestimonials.filter(t => t.region !== userRegion).slice(0, 2)
    setTestimonials(regionalTestimonial ? [regionalTestimonial, ...otherTestimonials] : otherTestimonials)
  }, [userRegion])

  return (
    <section id="testimonials" className="py-20 bg-background scroll-margin-top-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Verified Customer Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground">Age {testimonial.age}</p>
                  {testimonial.region === userRegion && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full mt-1 inline-block">
                      From your region
                    </span>
                  )}
                </div>
              </div>
              <p className="mb-4 text-foreground text-base leading-relaxed">{`"${testimonial.quote}"`}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-500 fill-yellow-500" 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
