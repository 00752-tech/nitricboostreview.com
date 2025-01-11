import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404: Page Not Found - Nitric Boost Ultra',
  description: 'Sorry, the page you are looking for does not exist. Please check the URL or navigate back to our homepage.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Gradient Background Circle */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl" />
            <div className="relative w-full h-full flex items-center justify-center">
              <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Page not found
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. Please check the URL or try navigating back to our homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500"
              asChild
            >
              <Link href="/" className="inline-flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <Link href="/blog" className="inline-flex items-center">
                <Search className="mr-2 h-4 w-4" />
                Browse Articles
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Popular Pages</h2>
            <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
              <Link href="/#benefits" className="hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link href="/#how-it-works" className="hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/#testimonials" className="hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-muted-foreground">
              Need help? <Link href="/contact" className="text-primary hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Nitric Boost Ultra. All rights reserved.</p>
      </footer>
    </div>
  )
}

