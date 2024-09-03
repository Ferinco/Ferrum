module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.5)" },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
