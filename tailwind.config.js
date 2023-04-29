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
        'gray-dark': '#111',
        'gray-light': '#888',
        'cream': '#eee',
        'gr': '#666',
        'rd': '#800',
        'bl': '#555555'
      },

      text:{
        'white': '#CDD0D5F',
      },

      fontFamily: {
        C: ['Cinzel', 'sans-serif'],
        I: ['Inter', 'Noto Sans', 'sans-serif']

      },
      padding: {
        63: '15.5rem',
      },
    },
  },
  plugins: [],
}