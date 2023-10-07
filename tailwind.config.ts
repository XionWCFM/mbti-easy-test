/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    borderRadius: {
      sm: '10px',
      md: '20px',
      full: '999px',
    },
    boxShadow: {
      default: `1px 1px 10px 1px hsla(264, 95%, 66%, 0.15)`,
      light: `0px 1px 8px 0px hsla(264, 95%, 66%, 0.25)`,
      dialog: `0px -8px 16px 0px hsla(0, 0%, 0%, 0.1)`,
      base: `0px 1px 2px 0px hsla(0, 0%, 0%, 0.06) , 0px 1px 3px 0px hsla(0, 0%, 0%, 0.1)`,
      card: `0px 4px 6px -2px hsla(0, 0%, 0%, 0.05) , 0px 10px 15px -3px hsla(0, 0%, 0%, 0.1)`,
    },
  },
  plugins: [],
};
