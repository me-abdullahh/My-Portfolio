import Heading from './Heading'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'
import { LogoFull } from './Logo'
import { services } from '@/lib/data'

export default function Services() {
  return (
    <section className="wrap section">
      <Heading
        eyebrow="What I do"
        aside={<p className="p max-w-[340px]">From the first wireframe to production APIs and the animation that makes it feel alive.</p>}
      >
        One developer, <i>the whole stack</i>
      </Heading>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className={i === 0 || i === 3 ? 'md:col-span-2' : ''}>
            <SpotlightCard className="relative h-full min-h-[290px] p-9">
              {i === 0 && <LogoFull className="pointer-events-none absolute -bottom-10 -right-8 h-[254px] w-[300px] opacity-[0.08]" />}
              {i === 1 && (
                <>
                  <div className="absolute right-7 top-7 h-[70px] w-[70px] rotate-[18deg] rounded-lg border border-[var(--accent)]" />
                  <div className="absolute right-12 top-12 h-[70px] w-[70px] -rotate-6 rounded-lg border border-[var(--accent2)]" />
                </>
              )}
              <h3 className={`t ${i === 1 ? 'mt-16' : ''}`}>{s.title}</h3>
              <p className="p mt-3.5 max-w-[460px]">{s.body}</p>
              {s.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
