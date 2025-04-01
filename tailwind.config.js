/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': ['44px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '36px', fontWeight: '600' }],
        'h3': ['19px', { lineHeight: '24px', fontWeight: '500' }],
        'body': ['17px', { lineHeight: '22px', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '18px', fontWeight: '400' }],
        'xsmall': ['8px', { lineHeight: '8px', fontWeight: '600', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
}
