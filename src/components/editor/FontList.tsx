import GoogleFonts from '../new/textEditor/GoogleFonts'

const FontButton = ({ label, font, onClick }: { label: string; font: string; onClick: (font: string) => void }) => (
  <button
    type="button"
    className="w-full mb-4 px-3 py-4 border border-black text-3xl"
    style={{
      fontFamily: font,
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}
    onClick={() => onClick(font)}
  >
    {label}
  </button>
)

export default function FontList({ onSelect }: { onSelect: (font: string) => void }) {
  return (
    <div className="p-4">
      <GoogleFonts />
      <FontButton label="Volkhov" font="Volkhov" onClick={onSelect} />
      <FontButton label="Source Serif Pro" font="Source Serif Pro" onClick={onSelect} />
      <FontButton label="Advent Pro" font="Advent Pro" onClick={onSelect} />
      <FontButton label="Allura" font="Allura" onClick={onSelect} />
      <FontButton label="Rock Salt" font="Rock Salt" onClick={onSelect} />
      <FontButton label="Serif" font='"Times New Roman", Times, serif' onClick={onSelect} />
      <FontButton label="Sans Serif" font="sans-serif" onClick={onSelect} />
      <FontButton label="Montserrat" font="Montserrat" onClick={onSelect} />
      <FontButton label="Oswald" font="Oswald" onClick={onSelect} />
      <FontButton label="Raleway" font="Raleway" onClick={onSelect} />
      <FontButton label="Lato" font="Lato" onClick={onSelect} />
      <FontButton label="Elsie" font="Elsie" onClick={onSelect} />
      <FontButton label="Roboto" font="Roboto" onClick={onSelect} />
      <FontButton label="Dancing Script" font="Dancing Script" onClick={onSelect} />
      <FontButton label="Josefin Sans" font="Josefin Sans" onClick={onSelect} />
      <FontButton label="Alegreya" font="Alegreya" onClick={onSelect} />
      <FontButton label="Anek Devanagari" font="Anek Devanagari" onClick={onSelect} />
      <FontButton label="Akshar" font="Akshar" onClick={onSelect} />
      <FontButton label="Albert Sans" font="Albert Sans" onClick={onSelect} />
      <FontButton label="Andada Pro" font="Andada Pro" onClick={onSelect} />
      <FontButton label="Anek Bangla" font="Anek Bangla" onClick={onSelect} />
      <FontButton label="Arima Madurai" font="Arima Madurai" onClick={onSelect} />
      <FontButton label="Spline Sans Mono" font="Spline Sans Mono" onClick={onSelect} />
      <FontButton label="Tangerine" font="Tangerine" onClick={onSelect} />
      <FontButton label="Abril Fatface" font="Abril Fatface" onClick={onSelect} />
      <FontButton label="Aboreto" font="Aboreto" onClick={onSelect} />
      <FontButton label="Akronim" font="Akronim" onClick={onSelect} />
      <FontButton label="Alfa Slab One" font="Alfa Slab One" onClick={onSelect} />
      <FontButton label="Allan" font="Allan" onClick={onSelect} />
      <FontButton label="Alumni Sans Inline One" font="Alumni Sans Inline One" onClick={onSelect} />
      <FontButton label="Alumni Sans Collegiate One" font="Alumni Sans Collegiate One" onClick={onSelect} />
      <FontButton label="Annie Use Your Telescope" font="Annie Use Your Telescope" onClick={onSelect} />
    </div>
  )
}