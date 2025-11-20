/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hugsberry: {
          navy: '#1C2E4A',
          green: '#2ECC71',
          cream: '#FFFDF7',
          yellow: '#FFD54F',
          pink: '#FF8A80',
          blue: '#64B5F6',
          red: '#FF5252',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Fredoka', 'cursive'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
}

