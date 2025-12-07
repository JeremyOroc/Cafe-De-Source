# Cafe De Source

A Next.js 14 website template for a cafe with menu display and QR code generation.

## Features

- **Landing Page** (`/`) - Clean homepage with navigation
- **Menu Page** (`/menu`) - Responsive menu display with image placeholders
- **QR Code Generator** (`/qr`) - Generate and download QR codes pointing to your menu
- Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- Fully Vercel-ready with no SSR blockers

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variable: `NEXT_PUBLIC_BASE_URL` (e.g., `https://your-domain.com`)
4. Deploy

The QR code will automatically use your production URL when deployed.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page (/)
│   ├── globals.css         # Global styles
│   ├── menu/
│   │   └── page.tsx        # Menu page (/menu)
│   └── qr/
│       └── page.tsx        # QR code page (/qr)
├── components/
│   └── QRCodeGenerator.tsx # Client-side QR component
└── public/                 # Static assets
```

## Customization

### Replacing Menu Placeholders

Edit `/app/menu/page.tsx` - the placeholder divs are numbered 1-5 and can be replaced with actual images:

```tsx
<img src="/menu-item-1.jpg" alt="Menu Item 1" />
```

### Environment Variables

- `NEXT_PUBLIC_BASE_URL` - Your production URL (used for QR code generation)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- qrcode (local QR generation, no API required)
