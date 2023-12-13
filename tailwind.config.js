module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,,scss}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code'],
    },
    extend: {
      colors: {
        brand: {
          dark: '#071126',
          light: '#fffef3',
          primary: '#0476D9',
          secondary: '#2987D9',
          soft: '#C5D5FF',
          accent: '#FF6B1A',
          'accent-hover': '#FFB238',
        },
        feedback: {
          error: '#FF0000',
          warning: '#FFC107',
          success: '#4BB543',
        },
        transparent: 'transparent',
      },
      backgroundImage: {
        'effect-granula': "url('/effectgranula.png')",
      },
      minHeight: {
        'screen-nav': 'calc(100vh - 5rem)',
        'screen-hero': 'calc(100vh - 15rem)',
      },
      spacing: {
        'center-x': '43%',
      },
    },
  },
}
