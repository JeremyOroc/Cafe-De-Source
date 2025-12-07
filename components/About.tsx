export default function About() {
  return (
    <section className="py-20 bg-cafe-wood">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-cafe-brown-dark mb-6">
              About Café de Source
            </h2>
            <p className="text-cafe-brown-deep text-lg mb-4 leading-relaxed">
              Welcome to Café de Source, where passion meets perfection in every cup. 
              Our carefully curated selection of artisanal coffees and teas is sourced 
              from the finest growers around the world.
            </p>
            <p className="text-cafe-brown-deep text-lg leading-relaxed">
              Whether you're here to catch up with friends, dive into a good book, 
              or simply savor a moment of tranquility, our warm and welcoming space 
              is designed to make you feel at home.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-cafe-brown-roasted">
              <div className="absolute inset-0 bg-gradient-to-br from-cafe-brown-caramel to-cafe-brown-roasted flex items-center justify-center">
                <span className="text-cafe-cream-foam text-6xl">☕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
