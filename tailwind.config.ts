import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        anton: ['var(--font-anton)'],
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        primary: {
          main: '#1d0131',
          accent: '#110127',
        },
        secondary: {
          main: '#f72c8a',
          accent: '#36eee0',
        },
        typography: {
          main: '#fff',
          secondary: '#616367',
        },
      },
    },
  },
  plugins: [],
}
export default config
