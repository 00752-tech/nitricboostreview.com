'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const gifs = [
  {
    src: "https://getnitricboost.com/images/affiliate/preview5.gif",
    alt: "Nitric Boost Ultra preparation demonstration"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/preview6.gif",
    alt: "Nitric Boost Ultra effects visualization"
  }
]

export default function MediaShowcase() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          See Nitric Boost Ultra in Action
        </h2>
        
        {/* GIF Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {gifs.map((gif, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={gif.src}
                alt={gif.alt}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* YouTube Review */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {!isVideoPlaying ? (
              <div className="relative">
                <Image
                  src="https://img.youtube.com/vi/vBGKrYvqigg/maxresdefault.jpg"
                  alt="Nitric Boost Ultra Review Video Thumbnail"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors group"
                >
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={40} className="ml-2" />
                  </motion.div>
                </button>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/vBGKrYvqigg?autoplay=1"
                title="Nitric Boost Ultra Review"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>
          <p className="text-center text-muted-foreground mt-4">
            Hear what others are saying about their transformative journey with Nitric Boost Ultra
          </p>
        </div>
      </div>
    </section>
  )
}

