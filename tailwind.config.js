module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { filter:'blur(10px)' },
          '100%': { filter:'blue(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeIn2:'fadeIn 1s ease-in-out',
      },
      fontFamily:{
        'Hurricane':['Hurricane'],
        'Montserrat':['Montserrat'],
      },
      backgroundImage:{
         'mybg':"url('../assets/wl2.jpg')",
      },
    },
  },
  plugins: [],
}
