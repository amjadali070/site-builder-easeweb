export default function TextColorIcon({ color = 'black' }: { color?: string }) {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.32597 0.059082H8.15197L12.282 9.99908H11.246L9.95797 6.89108H5.49197L4.21797 9.99908H3.16797L7.32597 0.059082ZM9.73397 6.12108L7.73197 1.20708L5.70197 6.12108H9.73397Z"
        fill="black"
      />
      <path d="M0 12.999H16V16.999H0V12.999Z" fill={color} />
    </svg>
  )
}
