module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        mountains: "url('../images/Mountains.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
