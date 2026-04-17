export default function CloverIcon({ className = '', color = '#2d7a3a', style }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={color} style={style}>
      {/* Top leaf */}
      <circle cx="50" cy="28" r="21" opacity="0.92" />
      {/* Bottom-right leaf */}
      <circle cx="70" cy="63" r="21" opacity="0.87" />
      {/* Bottom-left leaf */}
      <circle cx="30" cy="63" r="21" opacity="0.87" />
      {/* Center */}
      <circle cx="50" cy="52" r="11" opacity="0.98" />
      {/* Stem */}
      <rect x="48" y="74" width="4" height="17" rx="2" opacity="0.7" />
    </svg>
  )
}
