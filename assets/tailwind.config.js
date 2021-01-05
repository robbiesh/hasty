console.log(process.env.NODE_ENV);

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["../**/*.liquid"],
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      padding: {
        50: "50%",
        80: "80%",
        100: "100%",
      },
      inset: {
        "1/2": "50%",
        100: "100%",
      },
    },
  },
  variants: {},
  plugins: [],
};
