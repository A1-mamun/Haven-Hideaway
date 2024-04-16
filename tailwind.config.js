/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#131313',
        'dark-8': '#131313CC',
        'dark-7': '#131313B2',
        'dark-6': '#13131399',
        'dark-5': '#13131380',
        'dark-3': '#1313134D',
        'dark-15': '#13131326',
        'dark-05': '#1313130D',
        'sky-blue': '#59C6D2',
        'sky-blue-2': '#50B1C9',
        'green': '#23BE0A',
        'green-05': '#23BE0A0D',
        'blue': '#328EFF',
        'blue-15': '#328EFF26',
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

