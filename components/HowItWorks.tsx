import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

export default function HowItWorks() {
  const steps = [
    {
      title: "Boost Nitric Oxide Production",
      description: "Our unique blend of L-Arginine and L-Citrulline naturally increases nitric oxide levels in your body."
    },
    {
      title: "Enhance Blood Flow",
      description: "Improved nitric oxide levels lead to vasodilation, increasing blood flow throughout your body, especially in intimate areas."
    },
    {
      title: "Improve Erectile Function",
      description: "Enhanced blood flow supports better erectile function and overall intimate performance."
    },
    {
      title: "Boost Confidence and Satisfaction",
      description: "With improved performance, you'll experience increased confidence and satisfaction in your intimate life."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-secondary scroll-margin-top-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          How Nitric Boost Ultra Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold gradient-text mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="text-primary mt-4 mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Use Nitric Boost Ultra for Enhanced Performance",
          "description": "Learn how to use Nitric Boost Ultra to improve your intimate performance and overall well-being.",
          "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description
          }))
        })
      }} />
    </section>
  )
}

