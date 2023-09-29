import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#110127',
          accent: '#f72c8a',
        },
        secondary: {
          main: '#36eee0',
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
