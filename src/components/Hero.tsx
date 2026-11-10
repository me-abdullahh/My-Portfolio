'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'motion/react'
import { LogoFull } from './Logo'
import { site } from '@/lib/data'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

const words = [
  { t: 'Building' },
  { t: 'scalable', g: true },
  { t: 'web' },
  { t: 'products' },
  { t: 'with' },
  { t: 'code' },
  { t: '&' },
  { t: 'motion.' },
]

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const [show3d, setShow3d] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setShow3d(window.innerWidth >= 768 && !reduce)
  }, [])

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('.hw', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.07, delay: 0.2 })
      gsap.from('.hero-in', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.7 })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative overflow-hidden pb-24 pt-36 md:pt-44">
      <div className="gridbg absolute inset-x-0 top-0 h-[900px]" />
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-[800px] w-[900px]"
        style={{ background: 'radial-gradient(closest-side,rgba(124,92,255,.35),transparent)' }}
      />
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[700px] w-[800px]"
        style={{ background: 'radial-gradient(closest-side,rgba(34,211,238,.2),transparent)' }}
      />

      <div className="wrap relative flex flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1">
          <p className="eyebrow hero-in">
            {site.role} · {site.location}
          </p>
          <h1 className="font-display text-[clamp(2.6rem,6.2vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.02em]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.15em] align-bottom">
                <span className={`hw inline-block ${w.g ? 'gt' : ''}`}>{w.t}</span>
              </span>
            ))}
          </h1>
          <p className="p hero-in mt-7 max-w-[540px] text-lg">
            5+ years shipping production apps with Next.js, React, Node.js, NestJS and TypeScript. I also teach web development at
            Aptech and mentor developers to become job-ready.
          </p>
          <div className="hero-in mt-10 flex flex-wrap gap-4">
            <a className="btn" href="#work">
              View my work
            </a>
            <a className="btn2" href="#contact">
              Let’s talk
            </a>
          </div>
        </div>

        <div className="hero-in relative h-[560px] w-[420px] shrink-0 max-md:h-[470px] max-md:w-[340px]">
          {show3d && (
            <div className="pointer-events-none absolute -inset-24" aria-hidden="true">
              <HeroScene />
            </div>
          )}
          <LogoFull className="absolute left-0 top-0 h-[356px] w-[420px] opacity-10 max-md:hidden" />
          <div
            className="absolute left-[58px] top-11 h-[420px] w-[304px] overflow-hidden rounded-t-[152px] rounded-b-[28px] max-md:left-[18px] max-md:h-[400px]"
            style={{ border: '1px solid var(--accent)', boxShadow: '0 0 90px rgba(124,92,255,.35)' }}
          >
            <Image src="/me.png" alt={`Portrait of ${site.fullName}`} fill priority sizes="304px" className="object-cover" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass pill absolute right-[-8px] top-24 px-[18px] py-2.5 text-[13px] font-medium max-md:right-0"
            style={{ background: 'rgba(7,8,15,.8)' }}
          >
            Next.js · NestJS
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass pill absolute left-[-24px] top-[330px] px-[18px] py-2.5 text-[13px] font-medium max-md:left-0"
            style={{ background: 'rgba(7,8,15,.8)' }}
          >
            Three.js · GSAP
          </motion.div>
          <div
            className="glass absolute bottom-5 left-1/2 w-[260px] -translate-x-1/2 px-5 py-4 text-center"
            style={{ background: 'rgba(7,8,15,.85)' }}
          >
            <div className="font-display text-lg font-semibold">{site.fullName}</div>
            <div className="mt-1 text-[13px] text-[var(--muted)]">Open to remote roles &amp; freelance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
