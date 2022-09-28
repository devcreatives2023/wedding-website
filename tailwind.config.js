/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "'Spectral', serif",
        logo: " 'Henny Penny', cursive",
        footer: "'Inter Tight', sans-serif",
      },
      padding: {
        logo: "1rem 4rem ",
        lg: "1rem 2rem ",
        md: "1rem 3rem",
        sm: "1rem 2rem",
        section: "6rem  0",
      },
      backgroundColor: {
        xd: "rgb(90, 189, 178)",
      },
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
  plugins: [require('tailwind-scrollbar-hide')],
};
