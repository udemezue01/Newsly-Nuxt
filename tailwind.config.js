/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",

  ],
  theme: {
    fontFamily:{

      'body':['Manrope'],
      
      'inter':['Inter']
  
      },
    extend: {},
  },
  plugins: [

    require('@tailwindcss/line-clamp'),

  ],
}
