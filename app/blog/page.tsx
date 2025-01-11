import { Metadata } from 'next'
import ClientBlogIndex from './ClientBlogIndex'

export const metadata: Metadata = {
  title: 'ED Performance & Nitric Oxide Boosting Blog | Nitric Boost Ultra',
  description: 'Explore expert articles on erectile dysfunction, nitric oxide boosters, and natural performance enhancement. Stay informed with the latest research and tips.',
  keywords: 'ED, erectile dysfunction, nitric oxide, performance booster, sexual health, L-Arginine, L-Citrulline, natural supplements',
}

export default function BlogIndex() {
  return <ClientBlogIndex />
}

