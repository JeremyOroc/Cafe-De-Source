import { Metadata } from 'next'
import QRCodeGenerator from '@/components/QRCodeGenerator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'QR Code - Cafe De Source',
  description: 'Get QR code for our menu',
}

export default function QRPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const menuUrl = `${baseUrl}/menu`

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Menu QR Code</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Scan this code to view our menu
          </p>
        </div>

        <QRCodeGenerator url={menuUrl} />

        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Download the QR code using the button above</li>
            <li>Print or display the QR code in your cafe</li>
            <li>Customers can scan it to view your menu instantly</li>
          </ol>
          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              <strong>Note:</strong> Before deploying, set{' '}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">
                NEXT_PUBLIC_BASE_URL
              </code>{' '}
              in your environment variables to your production URL.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
