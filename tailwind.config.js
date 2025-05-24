/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 60%, 100%': { opacity: 1 },
          '10%, 50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1.2s infinite',
      },
    },
    colors: {
      'text': '#40362b',
      'background': '#f7ecbf',
      'primary': '#c14633',
      'secondary': '#e6ad28',
      'accent': '#7fbda3',
    },
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin()
  ],
}
