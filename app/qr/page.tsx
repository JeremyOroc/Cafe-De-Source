import { Metadata } from 'next'
import QRCodeGenerator from '@/components/QRCodeGenerator'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'QR Code - Cafe De Source',
  description: 'Get QR code for our menu',
}

export default function QRPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const menuUrl = `${baseUrl}/menu`

  return (
    <>
      <main className="min-h-screen bg-cafe-brown-deep">
        <section className="py-16 bg-gradient-to-b from-cafe-brown-dark to-cafe-brown-deep">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-cafe-cream-latte hover:text-cafe-cream-warm transition-colors text-sm"
              >
                <span className="mr-2">←</span> Back to Home
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-cafe-cream-foam mb-4">
                Menu QR Code
              </h1>
              <p className="text-lg text-cafe-cream-latte">
                Scan this code to view our menu instantly
              </p>
            </div>

            <QRCodeGenerator url={menuUrl} />

            <div className="mt-12 p-8 bg-cafe-brown-roasted rounded-xl border-2 border-cafe-brown-caramel">
              <h2 className="text-2xl font-bold text-cafe-cream-foam mb-4">
                How to Use
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-cafe-cream-latte">
                <li>Download the QR code using the button above</li>
                <li>Print or display the QR code in your cafe</li>
                <li>Customers can scan it to view your menu instantly</li>
                <li>No app required - works with any smartphone camera</li>
              </ol>
              <div className="mt-6 pt-6 border-t border-cafe-brown-caramel">
                <p className="text-sm text-cafe-cream-latte/80">
                  <strong className="text-cafe-cream-warm">Deployment Note:</strong> Before deploying to production, 
                  set <code className="bg-cafe-brown-dark px-2 py-1 rounded text-cafe-cream-foam font-mono text-xs">
                    NEXT_PUBLIC_BASE_URL
                  </code> in your environment variables to your production URL.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
