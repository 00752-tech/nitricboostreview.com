import Image from 'next/image'

const ingredients = [
  {
    name: "L-Arginine",
    benefit: "Boosts nitric oxide production, improving blood flow",
    imageUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800&q=80",
    alt: "L-Arginine molecular structure in professional visualization"
  },
  {
    name: "L-Citrulline",
    benefit: "Enhances L-Arginine's effects, prolonging nitric oxide production",
    imageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&q=80",
    alt: "Watermelon, natural source of L-Citrulline"
  },
  {
    name: "Maca Root",
    benefit: "Increases libido and overall energy levels",
    imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80",
    alt: "Fresh organic maca root"
  },
  {
    name: "Zinc",
    benefit: "Supports testosterone production and overall sexual health",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80",
    alt: "Professional zinc supplement powder"
  }
]

export default function IngredientSpotlight() {
  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
      <h3 className="text-3xl font-bold mb-8 text-white">Ingredient Spotlight</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center space-x-6 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="relative flex-shrink-0">
              <Image
                src={ingredient.imageUrl}
                alt={ingredient.alt}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">{ingredient.name}</h4>
              <p className="text-gray-300">{ingredient.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

