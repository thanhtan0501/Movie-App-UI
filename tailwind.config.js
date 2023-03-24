/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            raleway: ["Raleway", "sans-serif"],
            roboto: ["Roboto Slab", "serif"],
        },
        boxShadow: {
            "3xl": "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
        },
        transitionTimingFunction: {
            "in-expo": "cubic-bezier(0.175, 0.885, 0, 1)",
        },
        extend: {},
    },
    plugins: [],
};
