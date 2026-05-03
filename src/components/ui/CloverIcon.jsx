export default function CloverIcon({ className = '', color = '#2d7a3a', style }) {
  // Traditional shamrock: three heart-shaped lobes meeting at the center,
  // each with a V-notch on the outer edge and tapering to the stem join.
  // Lobes are rotated 0°, 120° and 240° around (50, 55).
  const leaf = [
    'M 50 55',                     // tapered point at the shamrock center
    'C 30 55 12 45 14 28',         // outer-left, swing up and out
    'C 16 12 35 6 45 18',          // left lobe top (rounded)
    'C 47 22 50 26 50 30',         // V-notch — left side dips inward
    'C 50 26 53 22 55 18',         // V-notch — right side rises back up
    'C 65 6 84 12 86 28',          // right lobe top (rounded)
    'C 88 45 70 55 50 55',         // outer-right back down to the center
    'Z',
  ].join(' ')

  return (
    <svg viewBox="0 0 100 100" className={className} style={style}>
      <g fill={color}>
        <path d={leaf} />
        <g transform="rotate(120 50 55)"><path d={leaf} /></g>
        <g transform="rotate(240 50 55)"><path d={leaf} /></g>
        <path
          d="M 50 56 Q 50 76 48 96"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}
