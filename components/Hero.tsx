import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cafe-brown-dark via-cafe-brown-deep/90 to-cafe-brown-deep">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920')] bg-cover bg-center opacity-30" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-cafe-cream-foam mb-6 tracking-wide">
          Café de Source
        </h1>
        <p className="text-xl md:text-2xl text-cafe-cream-latte mb-8 max-w-2xl mx-auto">
          Where every cup tells a story. Experience artisanal coffee in a warm, inviting atmosphere.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/menu"
            className="px-8 py-4 bg-cafe-red text-white rounded-lg hover:bg-cafe-red/90 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            View Our Menu
          </Link>
          <Link
            href="/qr"
            className="px-8 py-4 bg-cafe-cream-foam text-cafe-brown-deep rounded-lg hover:bg-cafe-cream-latte transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Get QR Code
          </Link>
        </div>
      </div>
    </section>
  )
}
