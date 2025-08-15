
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    colors:{
      primaryColor: '#4F46E5',
      secondaryColor: '#F28D35',
      analogousColor1: '#6A44F2',
      analogousColor2: '#1CBDDD',
      triadicColor1: '#52378C',
      darkColor1: '#78BF91',
      darkColor2: '#4DCA79',
      textColor: '#2F2F2F',
      textColorLight: '#545A75',
      textColorSubtle: '#B0B0B0',
      accentColor1: '#E2F2FE',
      accentColor2: '#FFF8E0',
      errorColor: '#FF0335',
      successColor: '#5EB30B',
      white: '#FFFFFF',
      neutral: '#6F6C90',
      black: '#000000',
    },
    extend: {
       fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      typography: {
        navbarLink: {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1',
          letterSpacing: '0',
        },
      },
    },
  },
  plugins: [],
}
