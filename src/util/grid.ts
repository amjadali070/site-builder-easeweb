export function getBlockWidth(columns: number) {
  const gap = '8px'

  if (columns === 4) {
    return '100%'
  }

  if (columns === 3) {
    return `calc(75% - ${gap})`
  }

  if (columns === 2) {
    return `calc(50% - ${gap})`
  }

  return `calc(25% - ${gap})`
}
