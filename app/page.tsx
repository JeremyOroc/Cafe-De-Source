import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Cafe De Source
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Welcome to our cafe
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/menu"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
          >
            View Menu
          </Link>
          <Link
            href="/qr"
            className="px-6 py-3 border border-black dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get QR Code
          </Link>
        </div>
      </div>
    </main>
  )
}
