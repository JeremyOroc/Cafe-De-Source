import { Metadata } from 'next'
import Image from 'next/image'
import coffeeMenu from './assets/coffee_menu.png'
import teaMenu from './assets/tea_menu.png'
import cakeMenu from './assets/cake_menu.jpg'

export const metadata: Metadata = {
  title: 'Menu - Cafe De Source',
  description: 'View our menu',
}

const menuItems = [
  { 
    id: 1, 
    name: 'Coffee Menu', 
    image: coffeeMenu,
    description: 'Our selection of specialty coffees'
  },
  { 
    id: 2, 
    name: 'Tea Menu', 
    image: teaMenu,
    description: 'Premium teas and infusions'
  },
  { 
    id: 3, 
    name: 'Cake Menu', 
    image: cakeMenu,
    description: 'Homemade cakes and desserts'
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our selection
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative bg-gray-200 dark:bg-gray-700">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
