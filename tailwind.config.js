/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.5rem',
            },

            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
                xxl: '1500px'
            },
            colors: {
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
            },

            extend: {
                spacing: {
                    '128': '32rem',
                    '144': '36rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                }
            }
        }
    }
}