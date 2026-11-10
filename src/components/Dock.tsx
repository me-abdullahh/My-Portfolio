'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { site } from '@/lib/data'

function Item({ mouseX, href, label, children, primary = false, external = false }: {
  mouseX: MotionValue<number>
  href: string
  label: string
  children: ReactNode
  primary?: boolean
  external?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return x - b.x - b.width / 2
  })
  const size = useTransform(distance, [-150, 0, 150], [48, 72, 48])
  const width = useSpring(size, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={label}
      title={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        width,
        height: width,
        background: primary ? 'var(--grad)' : 'rgba(255,255,255,.07)',
        color: primary ? 'var(--ink)' : 'var(--text)',
      }}
      className="flex aspect-square items-center justify-center rounded-2xl"
    >
      {children}
    </motion.a>
  )
}

const icon = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const

export default function Dock() {
  const mouseX = useMotionValue(Infinity)
  return (
    <nav
      aria-label="Quick links"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="glass fixed bottom-5 left-1/2 z-40 hidden h-[72px] -translate-x-1/2 items-end gap-3 px-4 pb-3 md:flex"
      style={{ background: 'rgba(7,8,15,.82)', borderRadius: 24 }}
    >
      <Item mouseX={mouseX} href="#" label="Home">
        <svg {...icon}><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
      </Item>
      <Item mouseX={mouseX} href="#work" label="Work">
        <svg {...icon}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>
      </Item>
      <Item mouseX={mouseX} href={`mailto:${site.email}`} label="Email me" primary>
        <svg {...icon}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
      </Item>
      <Item mouseX={mouseX} href={site.cv} label="Download CV">
        <svg {...icon}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></svg>
      </Item>
      <Item mouseX={mouseX} href={site.linkedin} label="LinkedIn" external>
        <span className="text-base font-bold">in</span>
      </Item>
    </nav>
  )
}
