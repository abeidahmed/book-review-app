const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      zIndex: {
        "100": "100",
        ...defaultTheme.zIndex
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
