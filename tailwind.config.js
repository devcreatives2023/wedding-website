/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     fontFamily:{main:"'Spectral', serif"}
     ,
     
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1502px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
