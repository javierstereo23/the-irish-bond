export default function CloverIcon({ className = '', color = '#2d7a3a', style }) {
  // Classic shamrock: three fat round lobes meeting at center, each shaped like
  // the Getty Images reference — circular top, narrow pinch point at stem join
  const leaf = [
    'M 50,60',
    'C 18,56 15,18 34,10',  // left outer: wide sweep up-left to lobe top-left
    'C 42,4 58,4 66,10',    // top arc: control pts at y=4 → maximum roundness
    'C 85,18 82,56 50,60',  // right outer: mirror back down to center
    'Z',
  ].join(' ')

  return (
    <svg viewBox="0 5 100 105" className={className} style={style} overflow="visible">
      <g fill={color}>
        <path d={leaf} />
        <g transform="rotate(120 50 60)"><path d={leaf} /></g>
        <g transform="rotate(240 50 60)"><path d={leaf} /></g>
        <path
          d="M 50,61 Q 48,78 46,96"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}
