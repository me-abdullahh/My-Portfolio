'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Heading from './Heading'
import Reveal from './Reveal'
import { experience } from '@/lib/data'

export default function Experience() {
  const list = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set('.beam', { scaleY: 1 })
        return
      }
      gsap.fromTo(
        '.beam',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top',
          scrollTrigger: { trigger: list.current, start: 'top 65%', end: 'bottom 65%', scrub: true },
        },
      )
    },
    { scope: list },
  )

  return (
    <section id="experience" className="wrap section">
      <Heading eyebrow="Experience">
        Where I’ve <i>worked</i>
      </Heading>
      <div ref={list} className="relative flex flex-col gap-6">
        <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-white/10" />
        <div className="beam absolute bottom-2 left-[7px] top-2 w-0.5" style={{ background: 'linear-gradient(180deg,var(--accent),var(--accent2))' }} />
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.05}>
            <div
              className="relative ml-14 before:absolute before:-left-14 before:top-[30px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[var(--accent)] before:bg-[var(--ink)] before:content-['']"
            >
              <div className="glass px-8 py-7 max-sm:px-5">
                <span className="text-[13px] font-medium text-[var(--accent2)]">{e.date}</span>
                <h3 className="t mt-2 text-[22px]">{e.role}</h3>
                <p className="p mt-1.5">
                  {e.org} · {e.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
