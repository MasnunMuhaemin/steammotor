/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '1/2': '1/2',
      },
      minWidth: {
        '1/2': '1/2',
      }
    },
  },
  plugins: [],
}

