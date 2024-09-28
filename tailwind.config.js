/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        primary: '#31363F',
        secondary: '#222831',
        utils: '#76ABAE'
      }
    },
  },
  plugins: [],
}

