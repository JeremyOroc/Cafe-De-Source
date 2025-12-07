'use client'

import { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRCodeGenerator({ url }: { url: string }) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const generateQR = async () => {
      try {
        if (canvasRef.current) {
          await QRCode.toCanvas(canvasRef.current, url, {
            width: 300,
            margin: 2,
            color: {
              dark: '#000000',
              light: '#FFFFFF',
            },
          })
        }

        const dataUrl = await QRCode.toDataURL(url, {
          width: 300,
          margin: 2,
        })
        setQrDataUrl(dataUrl)
      } catch (err) {
        console.error('Failed to generate QR code:', err)
      }
    }

    generateQR()
  }, [url])

  const downloadQR = () => {
    if (!qrDataUrl) return

    const link = document.createElement('a')
    link.href = qrDataUrl
    link.download = 'menu-qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <canvas ref={canvasRef} className="max-w-full h-auto" />
      </div>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button
          onClick={downloadQR}
          disabled={!qrDataUrl}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Download QR Code
        </button>

        <div className="text-sm text-center text-gray-600 dark:text-gray-400">
          Scan to visit: <span className="font-mono">{url}</span>
        </div>
      </div>
    </div>
  )
}
