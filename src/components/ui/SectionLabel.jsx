export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-900/30" />
      <span className="text-sm tracking-widest text-green-500/70 uppercase" style={{ letterSpacing: '0.3em' }}>
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-900/30" />
    </div>
  )
}
