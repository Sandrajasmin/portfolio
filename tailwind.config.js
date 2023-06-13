/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Libre Caslon Text'],
            },
            colors: {
                grey: '#EBEAEF',
                black: '#0F0E0E',
                white: '#FDF9F9',
            },
            animation: {
                text: 'text 6s ease infinite',
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '100% 100%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    plugins: [],
}
