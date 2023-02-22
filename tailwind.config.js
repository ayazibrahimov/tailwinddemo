/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",  
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        twitter: 'blue'
      },
      spacing: { /* ozunen tamamlamaq */
         '15': '5rem',
      },

    },
  },
  plugins: [],
}
