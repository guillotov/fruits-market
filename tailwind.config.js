/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: {
          10: "#03A92B", // Verde
          150: "#FFFFFF", //Blanco
          15: "#A31A39", // Rojo
          20: "#32BB2B", //Verde 2
        },
      },
    },
  },
  plugins: [],
};
