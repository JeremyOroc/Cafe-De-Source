import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-cafe-brown-deep py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-cafe-cream-foam mb-4">
              Café de Source
            </h3>
            <p className="text-cafe-cream-latte text-sm">
              Crafting exceptional coffee experiences since 2025
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-cafe-cream-foam mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cafe-cream-latte text-sm">
              <li>
                <Link href="/" className="hover:text-cafe-cream-warm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-cafe-cream-warm transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/qr" className="hover:text-cafe-cream-warm transition-colors">
                  QR Code
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-cafe-cream-foam mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cafe-brown-roasted flex items-center justify-center text-cafe-cream-foam hover:bg-cafe-red transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cafe-brown-roasted flex items-center justify-center text-cafe-cream-foam hover:bg-cafe-red transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cafe-brown-roasted flex items-center justify-center text-cafe-cream-foam hover:bg-cafe-red transition-colors">
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cafe-brown-roasted pt-8 text-center">
          <p className="text-cafe-cream-latte/70 text-sm">
            © {new Date().getFullYear()} Café de Source. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
