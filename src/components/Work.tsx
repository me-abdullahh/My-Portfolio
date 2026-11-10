import Heading from './Heading'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'
import { LogoFull } from './Logo'
import { projects } from '@/lib/data'

export default function Work() {
  return (
    <section id="work" className="wrap section">
      <Heading eyebrow="Selected work">
        Projects that <i>ship</i>
      </Heading>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <SpotlightCard href={p.href} className="block h-full p-5">
              <div className="thumb h-60" style={{ filter: `hue-rotate(${p.hue}deg)` }}>
                <LogoFull className="absolute left-1/2 top-1/2 h-[101px] w-[120px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="t mt-3.5 text-[22px]">{p.title}</h3>
              <p className="p mt-2">{p.body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
