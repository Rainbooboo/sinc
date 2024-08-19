import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '17px': '17px',
        '20px': '20px',
        '22px': '22px',
        '32': '32px',
        '13': '13px',
        'xxs': '10px',
        '15': '15px',
        '80': '80px'
      },
      margin: {
        '71px': '71px',
        '63px': '64px',
        '46': '46px',
        '78': '78px',
      },
      padding: {
        '120px': '120px',
        '170px': '170px',
        '63px': '64px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // 'white': '#ffffff',
        // 'purple': '#3f3cbb',
        // 'midnight': '#121063',
        // 'metal': '#565584',
        // 'tahiti': '#3ab7bf',
        // 'silver': '#ecebff',
        'g-color': '#212121',
        'grey-1': '#5B5454',
        'dark-grey': '#303030',
      'grey-2': '#4E4E4E',
      'grey-22': '#8E8E8E'
        },
      backgroundColor: {
        "dark-grey": '#303030',
        "lg-orange": '#F47733',
        "light-pink": '#FF78BF',
        "torq-blue": '#20888F',
        "light-pink2": '#FF88C6',
        "b-black": '#101010',

      },
      spacing: {
        '18': '72px', // Add custom spacing value (18 * 4 = 72px)
      },
      borderColor:{
        'b-1': '#A4A4A4',
        'b-11': '#212121',
        'b-111': '#cccccc'
      },
      height: {
        '60px': '60px',
        '356px': '356px'
      },
      width: {
        '118px': '118px',
         '60px': '60px',
         '879px': '879px'
         
      },
      lineHeight: {
        '67': '20px',
        '104': '104px'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
