import { marqueeTech } from '@/lib/data'

export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech]
  return (
    <div aria-hidden="true" className="fade-x relative mb-28 overflow-hidden border-y border-white/10 py-7">
      <div className="marquee">
        {items.map((t, i) => (
          <span key={i} className="mr-12 whitespace-nowrap text-sm font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
