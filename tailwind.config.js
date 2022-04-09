module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(355, 100%, 74%)',
        'very-dark-blue': 'hsl(208, 49%, 24%)',
        'grayish-blue': 'hsl(240, 2%, 79%)',
        'very-grayish-blue': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue': 'hsl(240, 10%, 16%)',
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        'body': '"Overpass", sans-serif;',
        'headings': '"Ubuntu", sans-serif;'
      },
      backgroundImage: {
        'intro-mobile': "url(../images/bg-pattern-intro-mobile.svg)",
        'circles': "url(../images/bg-pattern-circles.svg)",
        'intro-desktop': "url(../images/bg-pattern-intro-desktop.svg)",
      }
    },
  },
  plugins: [],
}
