import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          brown: {
            deep: '#3B2A1E',
            dark: '#2A1C14',
            roasted: '#5A3A24',
            caramel: '#A0714F',
          },
          cream: {
            latte: '#D4B08A',
            foam: '#F4E3C3',
            warm: '#CFA570',
          },
          wood: '#D1B79C',
          red: '#C4493A',
        },
      },
    },
  },
  plugins: [],
}
export default config
