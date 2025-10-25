// tailwind.config.js
module.exports = {
  content: [
  "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        principal: "#FD1953",
        principalHover: "#e4174e", 
        miAmarillo: "#FAFA83",
        fondo: "FAFAFA",
        principal50: "rgba(253, 25, 84, 0.16)"
      },
        boxShadow: {
        'custom': '0 0 18px -3px rgb(131 131 131 / 40%)', // sombra rosada personalizada
        'hover': '0 6px 15px rgba(21, 21, 21, 0.6)',   // para hover si deseas
        'miAmarillo': '0 0 15px -4px #FAFA83'
      },
    },
  },
  plugins: [
     require("flowbite/plugin")
  ],
   experimental: {
    containerQueries: true, 
}
}