/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#001F3F", // Navy Blue
                accent: "#D4AF37",  // Metallic Gold
                light: "#F4F4F9",   // Light Gray/White
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
