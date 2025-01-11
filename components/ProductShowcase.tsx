'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const productImages = [
  {
    src: "https://getnitricboost.com/images/affiliate/image1.webp",
    alt: "Nitric Boost Ultra supplement container with dynamic yellow powder effect"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image2.webp",
    alt: "Nitric Boost Ultra container with energetic red powder splash"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image3.webp",
    alt: "Nitric Boost Ultra product showcase with natural elements"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image4.webp",
    alt: "Nitric Boost Ultra supplement with dynamic composition"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image5.webp",
    alt: "Nitric Boost Ultra container with artistic effects"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image6.webp",
    alt: "Nitric Boost Ultra product with powder explosion effect"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image7.webp",
    alt: "Nitric Boost Ultra supplement with yellow energy burst"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image8.webp",
    alt: "Nitric Boost Ultra container with dramatic lighting"
  },
  {
    src: "https://getnitricboost.com/images/affiliate/image9.webp",
    alt: "Nitric Boost Ultra with red powder explosion effect"
  }
]

export default function ProductShowcase() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Featured Image */}
          <motion.div 
            className="relative w-full max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={productImages[selectedImage].src}
              alt={productImages[selectedImage].alt}
              width={800}
              height={800}
              className="rounded-lg shadow-2xl"
              priority={true}
            />
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl">
            {productImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  selectedImage === index 
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' 
                    : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

