/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "mainColor":"#0B0D17",
        "SubColor":"#D0D6F9",
      },
      fontFamily:{
        bellefair:["Bellefair","serif"],
        barlow:["Barlow Condensed","sans-serif"]
      }
    },
  },
  plugins: [],
}

