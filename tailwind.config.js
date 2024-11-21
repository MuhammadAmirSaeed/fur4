
module.exports = {
  theme: {
    extend: {
      colors:{
        customBlue:"#00AEEF",
        darkGrey:"#242424"
      },
      fontFamily: {
        din: ['"DIN Condensed"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  plugins: [],
};
