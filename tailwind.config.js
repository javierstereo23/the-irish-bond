/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#c41e3a',
        gold: '#d4a853',
        'irish-green': '#2d7a3a',
        'bg-main': '#080808',
        'bg-card': '#0d0d0d',
        'bg-editorial': '#0a0808',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
