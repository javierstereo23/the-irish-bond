export default function CloverIcon({ className = '', color = '#2d7a3a', style }) {
  // Heart-shaped leaf with pointed tip at center (50,63), lobes facing outward
  // Matches classic shamrock silhouette with V-notch between lobes
  const leaf = [
    'M 50,63',
    'C 24,56 20,28 37,20',   // left outer curve up to left lobe peak
    'C 43,15 50,30 50,30',   // round the left lobe, arrive at V-notch
    'C 50,30 57,15 63,20',   // out of notch, round the right lobe
    'C 80,28 76,56 50,63',   // right outer curve back down to center
    'Z',
  ].join(' ')

  return (
    <svg viewBox="-5 2 110 112" className={className} style={style} overflow="visible">
      <g fill={color}>
        {/* Top leaf */}
        <path d={leaf} />
        {/* Bottom-right leaf */}
        <g transform="rotate(120 50 63)">
          <path d={leaf} />
        </g>
        {/* Bottom-left leaf */}
        <g transform="rotate(240 50 63)">
          <path d={leaf} />
        </g>
        {/* Stem: slight curve to the left, natural look */}
        <path
          d="M 50,64 Q 48,80 46,98"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}
