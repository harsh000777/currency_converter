/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 
        background: "#f4e4ba", 
        button: "#af4d98" 
      },
    },
  },
  plugins: [],
};
