import { Zap, Heart, Shield, Battery, Clock, Smile } from 'lucide-react'
import Link from 'next/link'

export default function Benefits() {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Enhanced Intimate Performance",
      description: "Experience improved stamina and performance in intimate situations.",
      link: "/blog/nitric-oxide-guide"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Improved Blood Flow",
      description: "Boost nitric oxide production for better circulation where it matters most.",
      link: "/blog/boost-blood-flow"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "100% Natural Formula",
      description: "Made with L-Arginine, L-Citrulline, and other scientifically-backed ingredients.",
      link: "/blog/l-arginine-vascular-health"
    },
    {
      icon: <Battery className="w-6 h-6 text-primary" />,
      title: "Increased Energy Levels",
      description: "Feel more energetic and vital in your daily life and intimate moments.",
      link: "/blog/understanding-ed"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Long-Lasting Effects",
      description: "Enjoy sustained benefits with regular use of Nitric Boost Ultra.",
      link: "/blog/nitric-oxide-guide"
    },
    {
      icon: <Smile className="w-6 h-6 text-primary" />,
      title: "Boosted Confidence",
      description: "Regain your confidence and enjoy a more satisfying intimate life.",
      link: "/blog/understanding-ed"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-background scroll-margin-top-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Why Choose <span className="animate-gradient-text">Nitric Boost Ultra</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover how this breakthrough ED performance booster can help enhance intimate experiences and overall confidence
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-2">{benefit.description}</p>
                  <Link href={benefit.link} className="text-primary hover:underline">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Key Ingredients of Nitric Boost Ultra</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-secondary">
                <th className="border border-gray-300 p-2">Ingredient</th>
                <th className="border border-gray-300 p-2">Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">L-Arginine</td>
                <td className="border border-gray-300 p-2">Boosts nitric oxide production, improving blood flow</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-Citrulline</td>
                <td className="border border-gray-300 p-2">{`Enhances L-Arginine's effects, prolonging nitric oxide production`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Maca Root</td>
                <td className="border border-gray-300 p-2">Increases libido and overall energy levels</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Zinc</td>
                <td className="border border-gray-300 p-2">Supports testosterone production and overall sexual health</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

