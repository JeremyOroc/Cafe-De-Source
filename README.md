# Café de Source

A modern, fully-responsive Next.js 14 website for a boutique café with a cohesive coffee-shop aesthetic, menu display, and QR code generation.

## 🎨 Design System

The site uses a carefully crafted color palette inspired by café aesthetics:

### Color Palette
- **Deep Coffee Brown**: `#3B2A1E` - Primary dark backgrounds
- **Dark Chocolate Brown**: `#2A1C14` - Headers and accents
- **Roasted Bean Brown**: `#5A3A24` - Borders and cards
- **Caramel Coffee Brown**: `#A0714F` - Warm accents
- **Latte Cream Beige**: `#D4B08A` - Primary text on dark
- **Milk Foam Cream**: `#F4E3C3` - Headings and emphasis
- **Warm Wheat Beige**: `#CFA570` - Interactive elements
- **Light Wood Grain**: `#D1B79C` - Light backgrounds
- **Café Red**: `#C4493A` - Call-to-action buttons

## ✨ Features

### Home Page (`/`)
- **Hero Section** - Full-width coffee background with gradient overlay
- **About Section** - Café story with image placeholder
- **Gallery Section** - 6 image placeholders with hover effects
- **Contact Section** - Business info and contact form
- **Footer** - Social links and navigation

### Menu Page (`/menu`)
- Hero banner with café styling
- Responsive grid displaying menu images
- Elegant card design with hover effects
- Your 3 menu images (coffee, tea, cake) from `app/menu/assets/`
- Call-to-action to generate QR code

### QR Code Generator (`/qr`)
- Local QR code generation (no API required)
- Download QR code as PNG
- Styled to match café theme
- Points to `/menu` page

## 🚀 Getting Started

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

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with café fonts
│   ├── page.tsx                # Home page with all sections
│   ├── globals.css             # Global styles with café colors
│   ├── menu/
│   │   ├── page.tsx            # Menu page with café styling
│   │   └── assets/             # Your menu images
│   └── qr/
│       └── page.tsx            # QR code generator page
├── components/
│   ├── Hero.tsx                # Hero section component
│   ├── About.tsx               # About section component
│   ├── Gallery.tsx             # Gallery section component
│   ├── Contact.tsx             # Contact section component
│   ├── Footer.tsx              # Footer component
│   └── QRCodeGenerator.tsx     # Client-side QR component
├── tailwind.config.ts          # Tailwind with café color system
└── public/                     # Static assets
```

## 🎯 Deployment

### Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variable: `NEXT_PUBLIC_BASE_URL` (e.g., `https://your-domain.com`)
4. Deploy

The QR code will automatically use your production URL when deployed.

## 🛠️ Customization

### Adding Real Images

Replace placeholder images in:
- **Gallery**: Edit `components/Gallery.tsx` - replace emoji placeholders with actual images
- **About**: Edit `components/About.tsx` - replace the emoji placeholder with café interior photo
- **Hero**: Edit `components/Hero.tsx` - update the background image URL

### Menu Images

Your menu images are in `/app/menu/assets/`. To add more:
1. Add image files to the `assets` folder
2. Import them in `/app/menu/page.tsx`
3. Add to the `menuItems` array

### Color Customization

All colors are defined in `tailwind.config.ts` under the `cafe` namespace. Update these to match your brand.

### Contact Information

Update business details in `components/Contact.tsx`:
- Address
- Hours
- Phone number
- Email

## 🎨 Color Usage

Access café colors in Tailwind classes:
- `bg-cafe-brown-deep` - Deep coffee brown background
- `text-cafe-cream-foam` - Cream text
- `border-cafe-brown-roasted` - Brown borders
- `hover:bg-cafe-red` - Red accent on hover

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧰 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (with custom café color system)
- **qrcode** (local QR generation)
- **React** 19

## 📄 License

ISC
