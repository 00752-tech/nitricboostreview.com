import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

const domain = 'https://www.nitricboostreview.com'
const blogDomain = 'https://blog.nitricboostreview.com'

export const metadata: Metadata = {
  title: 'Nitric Boost Ultra Review 2025: ED Performance Booster',
  description: 'Discover how Nitric Boost Ultra can enhance your performance and boost your confidence. Read our 2025 review for all the details.',
  keywords: 'Nitric Boost Ultra review, nitric oxide booster, workout performance, muscle growth, energy levels',
  openGraph: {
    title: 'Nitric Boost Ultra Review 2025: ED Performance Booster',
    description: 'Discover how Nitric Boost Ultra can enhance your performance and boost your confidence. Read our 2025 review for all the details.',
    url: domain,
    siteName: 'NitricBoostReview.com',
    images: [
      {
        url: `${domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Nitric Boost Ultra Product Review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitric Boost Ultra Review 2025: ED Performance Booster',
    description: 'Discover how Nitric Boost Ultra can enhance your performance and boost your confidence. Read our 2025 review for all the details.',
    images: [`${domain}/images/twitter-image.jpg`],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="canonical" href={domain} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Nitric Boost Ultra",
              "description": "A scientifically formulated nitric oxide booster designed to enhance workout performance, increase energy levels, and improve muscle growth.",
              "brand": {
                "@type": "Brand",
                "name": "Nitric Boost Ultra"
              },
              "image": [
                "https://getnitricboost.com/images/affiliate/image9.webp",
                "https://getnitricboost.com/images/affiliate/image1.webp",
                "https://getnitricboost.com/images/affiliate/image2.webp"
              ],
              "offers": {
                "@type": "Offer",
                "price": "99.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": domain,
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "US"
                  },
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                      "@type": "QuantitativeValue",
                      "minValue": "0",
                      "maxValue": "1",
                      "unitCode": "DAY"
                    },
                    "transitTime": {
                      "@type": "QuantitativeValue",
                      "minValue": "1",
                      "maxValue": "5",
                      "unitCode": "DAY"
                    }
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MoneyBack",
                  "merchantReturnDays": "30",
                  "returnMethod": "https://schema.org/ReturnByMail"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1247",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Zack R."
                },
                "datePublished": "2025-01-08",
                "reviewBody": "Nitric Boost Ultra has completely transformed my intimate life. I feel more confident and energized, and my performance has significantly improved."
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "NitricBoostReview.com",
              "url": domain,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${domain}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "url": blogDomain,
              "name": "Nitric Boost Ultra Blog",
              "description": "Latest insights on ED performance, nitric oxide, and overall health.",
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": "The Science Behind Nitric Oxide: A Comprehensive Guide",
                  "datePublished": "2025-01-15",
                  "url": `${blogDomain}/nitric-oxide-guide`
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Understanding ED: Causes, Solutions, and Latest Research",
                  "datePublished": "2025-01-22",
                  "url": `${blogDomain}/understanding-ed`
                }
              ]
            }
          ])
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
