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
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our selection
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
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
