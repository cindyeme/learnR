module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 9s linear infinite",
      },
      colors: {
        primary: {
          fade: " rgb(38, 93, 151)",
          // amber: "#FFC107",
          amber: "#f5960b",
          600: "#132f4c",
          700: "#002147",
          800: "#CB7B01",
          900: "#8EA0F3",
        },
        tag: {
          pink: "#fe4a55",
          yellow: "#d9a416",
          deem: "#221638",
          blue: "#1888c9",
          purple: "#7c4bc0",
          red: "#d23f3f",
          pop: "#ff5a00",
          green: "#2da397",
          section: "rgb(0, 30, 60, 0.6)",
        },
        grayish: {
          light: "rgba(255, 255, 255, .2)",
          600: "#b2bac2",
          700: "#9DA5B3",
          800: "#907888",
          900: "#42383E",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        bolder: 800,
        extrabold: 900,
      },
      boxShadow: {
        new: "0 25px 50px -12px rgba(175, 211, 241, 0.5)",
      },
      padding: {
        6: "1.5rem",
        8: "2rem",
      },
      margin: {
        "550": "500px"
      },
      width: {
        550: "550px",
      },
      height: {
        550: "550px",
      },
      screens: {
        ipad: "1269px",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
