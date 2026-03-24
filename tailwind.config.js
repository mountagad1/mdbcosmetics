/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['DM Sans', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f9f4eb',
          200: '#f0e8d4',
          300: '#e4d3b4',
        },
        blush: {
          100: '#fde8e8',
          200: '#f9c9c9',
          300: '#f0a0a0',
          400: '#e07070',
          500: '#c94b4b',
          600: '#a83232',
        },
        sage: {
          100: '#e8f0e8',
          200: '#c4d9c4',
          300: '#8fb88f',
          400: '#5a8a5a',
          500: '#3d6b3d',
          600: '#2a4a2a',
        },
        gold: {
          100: '#fef3d0',
          200: '#fde68a',
          300: '#f6c94e',
          400: '#e9a825',
          500: '#c7870e',
        },
        charcoal: {
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
