import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        logo: '21px 21px 30px 0px rgba(28, 28, 51, 0.40)'
      },
      borderRadius:{
        lg: '999px 56px 999px 999px',
        md: '999px 56px 999px 999px',
        sm: '56px 999px 999px 999px'
      },
      fontFamily: {
        mainFont: ['Source Sans 3','sans-serif']
      },
      backgroundColor: {
        colorBody: '#23233B',
        main: '#1C1C33',
        second: '#57D9A6',
        threes: '#fff',
        four: '#4E4E65',
      },
      colors: {
        textColor: {
          colorOne: '#F6F6F8',
          colorTwo: '#4E4E65',
          colorThree: '#23233B',
          colorFour: '#57D9A6'
        }
      }
    },
  },
  plugins: [],
}
export default config
