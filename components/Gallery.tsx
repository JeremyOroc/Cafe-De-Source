export default function Gallery() {
  const images = [
    { id: 1, label: 'Artisan Latte Art' },
    { id: 2, label: 'Fresh Pastries' },
    { id: 3, label: 'Cozy Interior' },
    { id: 4, label: 'Coffee Beans' },
    { id: 5, label: 'Barista at Work' },
    { id: 6, label: 'Espresso Pour' },
  ]

  return (
    <section className="py-20 bg-cafe-brown-deep">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-cafe-cream-foam mb-12 text-center">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-lg overflow-hidden border-2 border-cafe-brown-roasted hover:border-cafe-cream-warm transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-cafe-brown-caramel"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cafe-brown-caramel to-cafe-brown-roasted flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl text-cafe-cream-foam mb-2 block">
                    {image.id === 1 && '☕'}
                    {image.id === 2 && '🥐'}
                    {image.id === 3 && '🪑'}
                    {image.id === 4 && '🫘'}
                    {image.id === 5 && '👨‍🍳'}
                    {image.id === 6 && '💧'}
                  </span>
                  <p className="text-cafe-cream-latte text-sm">{image.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
