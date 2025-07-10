/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-c": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
