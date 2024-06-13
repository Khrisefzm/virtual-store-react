/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '200': "200px",
      },
      padding: {
        '10': "10px",
      },
      backgroundColor: {
        'red': '#ff3b3c',
        'gray': '#f2f2f2',
      }
    },
  },
  plugins: [],
};
