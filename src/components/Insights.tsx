import Heading from './Heading'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'
import { LogoFull } from './Logo'
import { insights } from '@/lib/data'

export default function Insights() {
  const [big, ...rest] = insights
  return (
    <section id="insights" className="wrap section">
      <Heading
        eyebrow="Insights"
        aside={
          <a className="btn2" href="#">
            All articles
          </a>
        }
      >
        Notes on <i>building</i>
      </Heading>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="lg:row-span-2">
          <SpotlightCard href={big.href} className="block h-full p-5">
            <div className="thumb h-[280px]">
              <LogoFull className="absolute left-1/2 top-1/2 h-[101px] w-[120px] -translate-x-1/2 -translate-y-1/2 opacity-25" />
            </div>
            <div className="mt-5">
              <span className="tag">{big.category}</span>
            </div>
            <h3 className="t mt-3.5">{big.title}</h3>
            <p className="p mt-2">{big.body}</p>
            <p className="p mt-4 text-[13px]">{big.meta}</p>
          </SpotlightCard>
        </Reveal>
        {rest.map((a, i) => (
          <Reveal key={i} delay={0.08 * (i + 1)}>
            <SpotlightCard href={a.href} className="flex h-full items-center gap-5 p-5">
              <div className="thumb h-[120px] w-[120px] shrink-0" style={{ borderRadius: 14, filter: `hue-rotate(${i === 0 ? 35 : -40}deg)` }} />
              <div>
                <span className="tag">{a.category}</span>
                <h3 className="t mt-2.5 text-xl">{a.title}</h3>
                <p className="p mt-1.5 text-[13px]">{a.meta}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
