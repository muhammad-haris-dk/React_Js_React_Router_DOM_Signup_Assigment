/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '5xl' : '0px 0px 15px #76c981'
      },
      colors: {
        'light' : '#ffffff85'
      }
    },
  },
  plugins: [],
};
