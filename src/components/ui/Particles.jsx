import { useMemo } from 'react'

export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 1 + Math.random() * 3,
        opacity: 0.1 + Math.random() * 0.3,
      })),
    []
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: var(--p-opacity); }
          90% { opacity: var(--p-opacity); }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, rgba(45,122,58,0.8), rgba(212,168,83,0.4))',
            animation: `floatUp ${p.duration}s ${p.delay}s infinite ease-out`,
            '--p-opacity': p.opacity,
          }}
        />
      ))}
    </div>
  )
}
