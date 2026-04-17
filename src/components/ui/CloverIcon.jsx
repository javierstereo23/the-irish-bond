export default function CloverIcon({ className = '', color = '#c41e3a', style }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={color} style={style}>
      <path d="M50 45c-3-12-15-25-25-25C12 20 5 32 10 42c4 8 14 12 22 10L50 45z" opacity="0.9" />
      <path d="M55 45c12-3 25-15 25-25C80 7 68 0 58 5c-8 4-12 14-10 22L55 45z" opacity="0.85" />
      <path d="M50 55c3 12 15 25 25 25 13 0 20-12 15-22-4-8-14-12-22-10L50 55z" opacity="0.8" />
      <path d="M45 55c-12 3-25 15-25 25 0 13 12 20 22 15 8-4 12-14 10-22L45 55z" opacity="0.75" />
      <rect x="48" y="55" width="4" height="20" rx="2" opacity="0.7" />
    </svg>
  )
}
