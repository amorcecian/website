/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vercel: {
          bg: {
            DEFAULT: '#ffffff', // Light mode background
            dark: '#0a0a0a',    // Dark mode background (very dark gray)
          },
          text: {
            DEFAULT: '#1f2937', // Light mode text (dark gray)
            dark: '#eaeaea',    // Dark mode text (light gray)
          },
          accent: {
            DEFAULT: '#6b7280', // Medium Gray for light mode (Tailwind gray-500)
            dark: '#9ca3af',    // Lighter Gray for dark mode (Tailwind gray-400)
          },
          border: {
            DEFAULT: '#e5e7eb', // Light mode border
            dark: '#374151',    // Dark mode border
          }
        }
      }
    },
  },
  plugins: [],
} 