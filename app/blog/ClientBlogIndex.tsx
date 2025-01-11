'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Search, Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'nitric-oxide-guide',
    title: 'The Science Behind Nitric Oxide: A Comprehensive Guide',
    excerpt: 'Discover the crucial role of nitric oxide in vascular health and how it impacts your overall well-being, including erectile function and performance.',
    category: 'Scientific',
    date: '2025-01-15',
    author: 'Dr. Zara Vascular'
  },
  {
    id: 'understanding-ed',
    title: 'Understanding ED: Causes, Solutions, and Latest Research',
    excerpt: 'An in-depth look at erectile dysfunction, its various causes, and the most recent scientific findings on treatment options, including nitric oxide boosters.',
    category: 'Health & Wellness',
    date: '2025-01-22',
    author: 'Dr. Kai Vigor'
  },
  {
    id: 'boost-blood-flow',
    title: 'Natural Ways to Boost Blood Flow: Expert Guide',
    excerpt: 'Learn about scientifically-backed methods to improve your circulation and overall vascular health naturally, enhancing performance and vitality.',
    category: 'Health & Wellness',
    date: '2025-01-29',
    author: 'Aria Flowmaster, RD'
  },
  {
    id: 'l-arginine-vascular-health',
    title: 'The Role of L-Arginine in Vascular Health and ED Treatment',
    excerpt: 'Explore how L-Arginine contributes to nitric oxide production and its impact on cardiovascular wellness and erectile function.',
    category: 'Scientific',
    date: '2025-02-05',
    author: 'Dr. Nova Cardio'
  }
]

export default function ClientBlogIndex() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    return Array.from(new Set(blogPosts.map(post => post.category)))
  }, [])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const handleShare = (platform: string, post: BlogPost) => {
    const url = `https://www.nitricboostreview.com/blog/${post.id}`
    const text = `Check out this article: ${post.title}`
    let shareUrl = ''

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`
        break
    }

    window.open(shareUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-5 h-5 text-gray-400" />
                <span className="ml-1 text-gray-500 md:ml-2">Blog</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          ED Performance & Nitric Oxide Boosting Blog
        </h1>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center text-muted-foreground">
            Explore expert articles on erectile dysfunction, nitric oxide boosters, and natural performance enhancement. Stay informed with the latest research and tips for optimal sexual health and vitality.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors">
              <Badge className="mb-2">{post.category}</Badge>
              <h2 className="text-2xl font-semibold mb-3">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">By {post.author} | {post.date}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button variant="ghost" size="icon" onClick={() => handleShare('facebook', post)}>
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleShare('twitter', post)}>
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleShare('linkedin', post)}>
                    <LinkedIn className="w-4 h-4" />
                  </Button>
                  <span className="animate-pulse">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </span>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:underline ml-2">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No articles found matching your search criteria.</p>
        )}

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Why Read Our Blog?</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Expert-written content by healthcare professionals and researchers</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Latest scientific findings on ED and nitric oxide boosters</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Practical tips for improving sexual health and performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Unbiased reviews of natural supplements and treatments</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

