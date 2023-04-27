/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      
      colors: {
        'blue': '#1fb6ff',
        'red':'#9F2A2A',
        'white': '#FFFFFF',
        'purple': '#7e5bef',
        'black' : '#020808',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'blue': '#498EFF',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'grey-dark': '#273444',
        'grey': '#555',
        'gray-light': '#d3dce6',
        'lightgrey': '#E0E3E2',
      },

      text:{
        'white': '#CDD0D5F',
      },

      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },

      
      // colors: {
      //   hehe: '#18D039',
      //   'great-blue': {
      //     DEFAULT: '#2A669F',
      //     50: '#E4F7F8',
      //     100: '#CCEEF2',
      //     200: '#9CD7E5',
      //     300: '#6CB9D8',
      //     400: '#3B94CB',
      //     500: '#2A669F',
      //     600: '#234B83',
      //     700: '#1B3366',
      //     800: '#14204A',
      //     900: '#0C102E',
      //     950: '#080A20',
      //   },
      // }
      padding: {
        63: '15.5rem',
      },
    },
  },
  plugins: [],
}