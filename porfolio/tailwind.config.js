/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",     
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}",       
    "./src/**/*.{js,ts,jsx,tsx}",       
    "./component/Home/Navbar/**/*.{js,ts,jsx,tsx}", 
    "./component/Home/Hero/**/*.{js,ts,jsx,tsx}",
    "./component/Home/About/**/*.{js,ts,jsx,tsx}",
    "./component/Helper/**/*.{js,ts,jsx,tsx}",
    "./component/Home/Services/**/*.{js,ts,jsx,tsx}",
    "./component/Home/Project/**/*.{js,ts,jsx,tsx}",
    "./component/Home/Skills/**/*.{js,ts,jsx,tsx}",
    "./component/Home/Blog/**/*.{js,ts,jsx,tsx}",
    "./component/Home/Contact/**/*.{js,ts,jsx,tsx}",
    "./component/Home/Footer/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
