/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  // plugins: ['nativewind/tailwind/css'],
  // important: 'html',
  theme: {
    extend: {},
  },
  plugins:[]
}
 