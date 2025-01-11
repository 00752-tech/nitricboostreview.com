'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LocationIndicator from './LocationIndicator'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleGetStarted = () => {
    window.location.href = '/api/male-validity'
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nitric Boost Ultra
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors">Benefits</Link>
            <Link href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Testimonials</Link>
            <Button
              
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="#benefits" className="block text-foreground/80 hover:text-foreground transition-colors">Benefits</Link>
            <Link href="#how-it-works" className="block text-foreground/80 hover:text-foreground transition-colors">How It Works</Link>
            <Link href="#testimonials" className="block text-foreground/80 hover:text-foreground transition-colors">Testimonials</Link>
            <Link 
              href="#get-started" 
              className="block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
      <div className="bg-gray-800/20 py-1 px-4">
        <div className="container mx-auto">
          <LocationIndicator />
        </div>
      </div>
    </header>
  )
}
