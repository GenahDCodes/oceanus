/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1F3A',
          800: '#132847',
          700: '#1A3560',
        },
        ocean: {
          100: '#E7F2FA',
          600: '#1D6FA4',
          500: '#2280BC',
          400: '#3A9DD1',
          700: '#195F8C',
        },
        accent: {
          DEFAULT: '#F4820A',
          light: '#F9A23E',
        },
        steel: {
          100: '#F4F6F8',
          200: '#E8ECF0',
          300: '#C8D0DA',
          400: '#8A96A3',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
