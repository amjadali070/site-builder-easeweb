import { useState } from 'react'

const defaultStyles = {
  display: 'block',
  height: '60px',
  borderWidth: '1px',
  borderColor: '#000',
  fontSize: '30px',
  backgroundColor: '#b5cae0',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  maxWidth: '100%',
  borderRadius: '0px',
  color: '#000',
}

const buttonStyles = {
  large: {
    rounded: {
      ...defaultStyles,
      width: '346px',
      borderRadius: '25px',
    },
    semiRounded: {
      ...defaultStyles,
      width: '346px',
      borderRadius: '15px',
    },
    sharp: {
      ...defaultStyles,
      width: '346px',
    },
  },
  medium: {
    rounded: {
      ...defaultStyles,
      width: '249px',
      borderRadius: '25px',
    },
    semiRounded: {
      ...defaultStyles,
      width: '249px',
      borderRadius: '15px',
    },
    sharp: {
      ...defaultStyles,
      width: '249px',
    },
  },
  small: {
    rounded: {
      ...defaultStyles,
      borderRadius: '25px',
      width: '128px',
    },
    semiRounded: {
      ...defaultStyles,
      borderRadius: '15px',
      width: '128px',
    },
    sharp: {
      ...defaultStyles,
      width: '128px',
    },
  },
}

interface ButtonProps {
  onSelect: (value: Record<string, string>) => void
  activeTab?: 'large' | 'medium' | 'small'
}

export default function Button({ onSelect, activeTab }: ButtonProps) {
  const [active, setActive] = useState<'large' | 'medium' | 'small'>(activeTab || 'large')

  return (
    <div className="my-4 px-6">
      <div className="border-2 border-black flex justify-between">
        <button
          type="button"
          onClick={() => setActive('large')}
          className={`py-5 grow border-r border-black ${active === 'large' && 'bg-gray-300'}`}
        >
          large
        </button>
        <button
          type="button"
          onClick={() => setActive('medium')}
          className={`py-5 grow border-r border-black ${active === 'medium' && 'bg-gray-300'}`}
        >
          medium
        </button>
        <button
          type="button"
          onClick={() => setActive('small')}
          className={`py-5 grow ${active === 'small' && 'bg-gray-300'}`}
        >
          small
        </button>
      </div>

      <div className="flex justify-center">
        <div className="mt-16 space-y-16">
          {active === 'large' && (
            <>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.large.rounded)}
                style={buttonStyles.large.rounded}
              >
                Big Button to Press
              </button>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.large.semiRounded)}
                style={buttonStyles.large.semiRounded}
              >
                Big Button to Press
              </button>
              <button type="button" onClick={() => onSelect(buttonStyles.large.sharp)} style={buttonStyles.large.sharp}>
                Big Button to Press
              </button>
            </>
          )}
          {active === 'medium' && (
            <>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.medium.rounded)}
                style={buttonStyles.medium.rounded}
              >
                Medium Button
              </button>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.medium.semiRounded)}
                style={buttonStyles.medium.semiRounded}
              >
                Medium Button
              </button>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.medium.sharp)}
                style={buttonStyles.medium.sharp}
              >
                Medium Button
              </button>
            </>
          )}
          {active === 'small' && (
            <>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.small.rounded)}
                style={buttonStyles.small.rounded}
              >
                Small
              </button>
              <button
                type="button"
                onClick={() => onSelect(buttonStyles.small.semiRounded)}
                style={buttonStyles.small.semiRounded}
              >
                Small
              </button>
              <button type="button" onClick={() => onSelect(buttonStyles.small.sharp)} style={buttonStyles.small.sharp}>
                Small
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
