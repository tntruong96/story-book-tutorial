/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary:{
          50: '#FFF9EC',
          100: '#FFF5DE',
          200: '#FFECC2',
          400: '#FFCE60',
          500: '#FFBB22',
          600:'#EBAC1F',
          800: '#986F14'
        },
        neutral: {
          25:'#F5F6F7',
          50:'#F1F2F3',
          100:'#E1E2E5',
          200:'#C4C6CD',
          300:'#A3A5AE',
          500:'#626576',
          900:'#090A0B'
        }
      },
      borderColor: {
        primary:{
          50: '#FFF9EC',
          100: '#FFF5DE',
          200: '#FFECC2',
          400: '#FFCE60',
          500: '#FFBB22',
          600:'#EBAC1F',
          800: '#986F14'
        },
        neutral: {
          25:'#F5F6F7',
          50:'#F1F2F3',
          100:'#E1E2E5',
          200:'#C4C6CD',
          300:'#A3A5AE',
          500:'#626576',
          900:'#090A0B'
        }
      }
    },
   
  },
  plugins: [],
}

