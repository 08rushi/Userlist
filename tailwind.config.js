/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slide-continuous': 'slide-continuous 10s linear infinite',
      },
      keyframes: {
        'slide-continuous': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        
      },
        fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        mon:['Modern No. 20'],
        ral:['Candra'],
      },
    },
  },
  plugins: [],
}

