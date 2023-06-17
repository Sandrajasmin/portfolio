/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
    addUtilities({
        '.my-rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
        '.preserve-3d': {
            transformStyle: 'preserve-3d',
        },
        '.perspective': {
            perspective: '1000px',
        },
        '.backface-hidden': {
            backfaceVisibility: 'hidden',
        },
    })
})

export default {
    mode: 'jit',
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
    plugins: [Myclass],
}
