const { withTheme } = require("@op-ent/unstyled-ui-theme");

/** @type {import('tailwindcss').Config} */
module.exports = withTheme({
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
});
