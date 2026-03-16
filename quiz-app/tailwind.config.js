/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Hada houwa l-mohem l-US12 dyalk
  theme: {
    extend: {
      colors: {
        // Alwan l-vibe dyal l-mockup li writyni
        primary: {
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        darkBg: '#0f172a',
      },
    },
  },
  plugins: [],
}