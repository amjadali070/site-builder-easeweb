module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/_polly/components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // #284E7F
        'primary.main': 'rgba(40, 78, 127, var(--tw-bg-opacity, 1))',
        // #FD5749
        'secondary.main': 'rgba(253, 87, 73, var(--tw-bg-opacity, 1))',
      },
      boxShadow: {
        updateButton: 'rgb(0 0 0 / 16%) 0px -10px 21px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
