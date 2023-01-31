module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',

    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        lightYellow: 'hsl(55, 92%, 65%)',
        lightGray: '#4f4e4e',
      }
    },
  },
  plugins: [],
}