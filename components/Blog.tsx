import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'nitric-oxide-guide',
    title: 'The Science Behind Nitric Oxide: A Comprehensive Guide',
    excerpt: 'Discover the crucial role of nitric oxide in vascular health and how it impacts your overall well-being.',
    category: 'Scientific',
    date: '2025-01-15'
  },
  {
    id: 'understanding-ed',
    title: 'Understanding ED: Causes, Solutions, and Latest Research',
    excerpt: 'An in-depth look at erectile dysfunction, its various causes, and the most recent scientific findings on treatment options.',
    category: 'Health & Wellness',
    date: '2025-01-22'
  },
  {
    id: 'boost-blood-flow',
    title: 'Natural Ways to Boost Blood Flow: Expert Guide',
    excerpt: 'Learn about scientifically-backed methods to improve your circulation and overall vascular health naturally.',
    category: 'Health & Wellness',
    date: '2025-01-29'
  },
  {
    id: 'l-arginine-vascular-health',
    title: 'The Role of L-Arginine in Vascular Health',
    excerpt: 'Explore how L-Arginine contributes to nitric oxide production and its impact on cardiovascular wellness.',
    category: 'Scientific',
    date: '2025-02-05'
  }
]

export default function Blog() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Latest Insights on ED Performance and Health
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors">
              <span className="text-sm text-primary mb-2 inline-block">{post.category}</span>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

