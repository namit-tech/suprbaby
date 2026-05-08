/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b85e43',
        secondary: '#ffffea',
        dark: '#3d1104ff',
      },
      fontFamily: {
        spartan: ['"League Spartan"'],
        primary: ['"League Spartan"'],
        // secondary: ['"Playfair Display"'],
        secondary: ['"Urbanist"'],
        accent: ['"Pinyon Script"', 'cursive'],
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}
