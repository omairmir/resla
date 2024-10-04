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
      backgroundImage: {
        'paint-red': 'linear-gradient(180deg, #DD4C53 0%, #77292D 100%)',
        'paint-blue': 'linear-gradient(180deg, #6368FF 0%, #01079C 100%)',
        'paint-black': 'linear-gradient(180deg, #44403C 0%, #110F0C 100%);',
        'paint-pearl': 'linear-gradient(180deg, #EDECEB 0%, #D6D2CD 100%)',
        'paint-silver': 'linear-gradient(180deg, #696F77 0%, #373B41 100%)'
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
        'heading': ['3.5rem', '3.5rem'], // 3.5rem -- same lineheight and fontsize
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
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

