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
      },
      margin: {
        '71px': '71px',
        '63px': '64px',
      },
      padding: {
        '120px': '120px',
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
        'dark-grey': '#303030'
      },
      backgroundColor: {
        "dark-grey": '#303030',
        "lg-orange": '#F47733',
        "light-pink": '#FF78BF',
        "torq-blue": '#20888F',
        "light-pink2": '#FF88C6',

      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
