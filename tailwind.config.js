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
