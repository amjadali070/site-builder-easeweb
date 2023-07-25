import GoogleFontLoader from 'react-google-font-loader'

export default function GoogleFonts() {
  return (
    <GoogleFontLoader
      fonts={[
        {
          font: 'Volkhov',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Source Serif Pro',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Advent Pro',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Allura',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Rock Salt',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Montserrat',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Oswald',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Raleway',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Lato',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Elsie',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Roboto',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Dancing Script',
          weights: [400, 500, 600, 700]
        },
        {
          font: 'Josefin Sans',
          weights: [400, 500, 600, 700]
        }
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
  )
}
