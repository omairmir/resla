/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}', "./node_modules/flowbite/**/*.js",],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#EDECEB',
          100: '#110F0C',
          200: '#1E1B18',
          300: '#2B2825',
          400: '#44403C',
          500: '#54504C',
          600: '#9F9992',
          700: '#D6D2CD',
          800: '#E5E3E0',
          900: '#EDECEB',
          1000: '#F5F5F7',
        },
        'resla-ebony-100':'#F5F5F7',
        'resla-ebony-90': '#EDECEB',
        'resla-ebony-80': '#E5E3E0',
        'resla-ebony-70': '#D6D2CD',
        'resla-ebony-60': '#9F9992',
        'resla-ebony-50': '#54504C',
        'resla-ebony-40': '#44403C',
        'resla-ebony-30': '#2B2825',
        'resla-ebony-20': '#1E1B18',
        'resla-ebony-10': '#110F0C',
        'resla-ebony-1000': '#0C0C11'
      },
      maxWidth: {
        'desktop': '90rem',
        'content': '42.5rem'
      },
      boxShadow: {
        'custom': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        'urbanist': ['"Urbanist"'],
      },
      fontSize: {
        'heading': ['56px', '56px'], // 3.5rem -- same lineheight and fontsize
        'heading-1': '2.5rem',
        'heading-2': '2rem',
      },
      lineHeight:{
        '6.5':'25.6px' // custom value 25.6px line height - usage -> leading-6.5
      },
      letterSpacing: {
        'negative-2': '-0.02em',
        'negative-3': '-0.03em', // Custom value for letter spacing like -3%, -5%
        'negative-5': '-0.05em',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

