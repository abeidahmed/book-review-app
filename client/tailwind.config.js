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
      },
      boxShadow: {
        errorOutline: "0 0 0 3px rgba(229, 62, 62, 0.5)"
      }
    },
    customForms: theme => ({
      error: {
        "input, textarea": {
          borderColor: theme("colors.red.600"),
          "&:focus": {
            boxShadow: theme("boxShadow.errorOutline"),
            borderColor: theme("colors.red.600")
          }
        }
      }
    })
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
