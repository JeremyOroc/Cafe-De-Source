import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
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
    <>
      <main className="min-h-screen bg-cafe-brown-deep">
        <section className="relative py-20 bg-gradient-to-b from-cafe-brown-dark to-cafe-brown-deep">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-4">
              <Link
                href="/"
                className="inline-flex items-center text-cafe-cream-latte hover:text-cafe-cream-warm transition-colors text-sm"
              >
                <span className="mr-2">←</span> Back to Home
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-cafe-cream-foam mb-4">
                Our Menu
              </h1>
              <p className="text-xl text-cafe-cream-latte max-w-2xl mx-auto">
                Discover our carefully curated selection of artisanal beverages and treats
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cafe-brown-deep">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-cafe-brown-roasted rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-cafe-brown-roasted hover:border-cafe-cream-warm"
                >
                  <div className="relative w-full bg-cafe-wood" style={{ aspectRatio: '1 / 1' }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 bg-cafe-brown-roasted">
                    <h3 className="text-xl md:text-2xl font-bold text-cafe-cream-foam mb-2">
                      {item.name}
                    </h3>
                    <div className="w-16 h-1 bg-cafe-red mb-3 rounded-full"></div>
                    <p className="text-sm md:text-base text-cafe-cream-latte">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-cafe-brown-dark">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-cafe-cream-foam mb-6">
              Scan & Order
            </h2>
            <p className="text-cafe-cream-latte mb-8">
              Get our QR code to share this menu with your customers
            </p>
            <Link
              href="/qr"
              className="inline-block px-8 py-4 bg-cafe-red text-white rounded-lg hover:bg-cafe-red/90 transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              Generate QR Code
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
