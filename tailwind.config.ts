/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    "colors": {
      "primary": "#F90223",
      "blue": "#011223",
      "white": "#ffffff",
      "red": "#520017",
      "black": "#000000",
      "green": "#58bd7d",
      "orange": "#ff6838",
      "primary-shade": {
        "1": "#04366a",
        "2": "#043263",
        "3": "#032f5c",
        "4": "#032b55",
        "5": "#03284e",
        "6": "#032447",
        "7": "#022040",
        "8": "#021d39",
        "9": "#021931",
        "10": "#02162a",
        "11": "#011223",
        "12": "#010e1c",
        "13": "#010b15",
        "14": "#01070e",
        "15": "#000407"
      },
      "primaty-tint": {
        "1": "#04366a",
        "2": "#054384",
        "3": "#06509d",
        "4": "#075db7",
        "5": "#086ad1",
        "6": "#0977ea",
        "7": "#1885f6",
        "8": "#4ba0f8",
        "10": "#65aef9",
        "11": "#7fbbfa",
        "12": "#98c9fb",
        "13": "#b2d6fc",
        "14": "#cce4fd",
        "15": "#e5f1fe"
      },
      "white-shade": {
        "1": "#ffffff",
        "2": "#fafafa",
        "3": "#f2f2f2",
        "4": "#e6e6e6",
        "5": "#d9d9d9",
        "6": "#cccccc",
        "7": "#bfbfbf",
        "8": "#b3b3b3",
        "9": "#a6a6a6",
        "10": "#999999",
        "11": "#8c8c8c",
        "12": "#808080",
        "13": "#737373",
        "14": "#666666",
        "15": "#595959",
        "16": "#4c4c4c",
        "17": "#404040",
        "18": "#333333",
        "19": "#262626",
        "20": "#191919",
        "21": "#0d0d0d"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        opensans: ['var(--font-opensans)'],
        outfit: ['var(--font-outfit)'],
      },
      "boxShadow": {
        "drop-shadow": "46px 23px 73px 0px rgba(0,0,0,0.05)",
        "drop-2": "0px 4px 29px 0px rgba(0,0,0,0.15)",
        "soft-shadow": "0px 119px 130px 0px rgba(0,0,0,0.03)",
        "card": "101px 66px 141px 0px rgba(0, 0, 0, 0.12)",
        "badge": "1px 23px 75px 0px rgba(0, 0, 0, 0.10)"
       },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [],
}
