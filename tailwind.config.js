/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [
	require('@tailwindcss/forms'),
  ],
}
