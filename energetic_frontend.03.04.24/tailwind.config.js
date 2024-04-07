/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#0d1117",
        colBgColor: "#262c32",
        greenColor: "#22c55e",
        redColor: "#ef4444",
        light: {
          mainBGColor: "#f0eee5",
          btnOkColor: "#22c55e",
          btnCancelColor: "#ef4444",
          cardBgColor: "#ffffff",
          borderColor: "#959289",
          colBgColor: "",
        },
        dark: {
          mainBGColor: "#505050",
          btnOkColor: "#89a989",
          btnCancelColor: "#a98989",
          cardBgColor: "#606060",
          borderColor: "#959289",
          colBgColor: "707070",
        },
      },
    },
  },
  plugins: [],
};
