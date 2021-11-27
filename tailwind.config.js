const colors = require('tailwindcss/colors')

module.exports = {
  mode: "spa",
  purge: ["src/**/*.{js,jsx,ts,tsx}", "public/index.html"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "100%",
        md: "840px",
        lg: "1080px",
        xl: "1280px",
      },
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      purple: colors.plum,
      green: colors.green,
      yellow: colors.yellow,
      black: colors.black,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      fontFamily: {
      },
      colors: {
        "primary": "#8ec5fc",
        "secondary": "#ffc107",
        "success": "#28a745",
        "info": "#17a2b8",
        "warning": "#ffc107",
        "danger": "#dc3545",
        "light": "#eeeeee",
        "dark": "#333333",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    }
  },
  plugins: [

  ],
}
