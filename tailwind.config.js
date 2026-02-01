/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./services.html",
    "./gallery.html",
    "./testimonials.html",
    "./contact.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D4AF37',
        'brand-charcoal': '#121212',
        'brand-dark': '#0A0A0A',
        'brand-accent': '#FFD700',
      },
      fontFamily: {
        'serif': ['Outfit', 'sans-serif'],
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}