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
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin()
  ],
}
