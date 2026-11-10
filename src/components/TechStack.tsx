import Reveal from './Reveal'
import { Mono } from './Logo'
import { orbit, stackGroups } from '@/lib/data'

function Orbit() {
  return (
    <div className="relative mx-auto h-[560px] w-[560px] shrink-0 max-md:h-[340px] max-md:w-[340px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 max-md:scale-[0.6]">
        <div
          className="absolute inset-5 rounded-full"
          style={{ background: 'radial-gradient(closest-side,rgba(124,92,255,.28),rgba(34,211,238,.08) 60%,transparent)' }}
        />

        {orbit.map((ring, i) => {
          const dir = ring.reverse ? 'reverse' : 'normal'
          return (
            <div
              key={ring.r}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ animation: `orbit ${ring.dur}s linear infinite ${dir}` }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: ring.r * 2,
                  height: ring.r * 2,
                  left: -ring.r,
                  top: -ring.r,
                  border: `1px ${i === 1 ? 'dashed' : 'solid'} rgba(255,255,255,${i === 0 ? 0.18 : i === 1 ? 0.16 : 0.1})`,
                }}
              />
              {ring.items.map((it) => (
                <div key={it.t} className="absolute left-0 top-0" style={{ transform: `rotate(${it.a}deg) translateX(${ring.r}px)` }}>
                  <div style={{ transform: `rotate(${-it.a}deg)` }}>
                    <div className="relative" style={{ animation: `orbit-rev ${ring.dur}s linear infinite ${dir}` }}>
                      <span className="chip">{it.t}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        })}

        <div
          className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{ background: 'var(--panel)', border: '1px solid rgba(255,255,255,.2)', boxShadow: '0 0 70px rgba(124,92,255,.55)' }}
        >
          <Mono className="h-[66px] w-[30px]" />
        </div>
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="wrap section flex flex-col items-center gap-14 lg:flex-row">
      <Reveal className="flex-1">
        <p className="eyebrow">Tech stack</p>
        <h2 className="h2">
          Tools I <i>build with</i>
        </h2>
        <p className="p mt-5 max-w-[440px]">A focused, modern stack I use every day, from interface to database and the motion layer on top.</p>
        <dl className="mt-9 grid gap-3.5 sm:grid-cols-2">
          {stackGroups.map((g) => (
            <div key={g.title} className="glass p-5" style={{ borderRadius: 18 }}>
              <dt className="eyebrow" style={{ margin: '0 0 10px' }}>
                {g.title}
              </dt>
              <dd className="m-0 text-sm leading-relaxed text-[var(--text)]">{g.items}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal delay={0.1} y={0}>
        <Orbit />
      </Reveal>
    </section>
  )
}
