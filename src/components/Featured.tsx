'use client'

import { motion } from 'motion/react'
import Reveal from './Reveal'
import { featured } from '@/lib/data'

type Tok = { t: string; c?: 'a' | 'b' }
const code: Tok[][] = [
  [{ t: '@Controller', c: 'b' }, { t: "('projects')" }],
  [{ t: 'export class', c: 'a' }, { t: ' ProjectsController {' }],
  [{ t: '  ' }, { t: '@Get', c: 'b' }, { t: "(':slug')" }],
  [{ t: '  findOne(' }, { t: '@Param', c: 'b' }, { t: "('slug') slug: string) {" }],
  [{ t: '    ' }, { t: 'return', c: 'a' }, { t: ' this.projects.findBySlug(slug);' }],
  [{ t: '  }' }],
  [{ t: '}' }],
]

export default function Featured() {
  return (
    <section className="wrap section flex flex-col items-center gap-14 lg:flex-row lg:gap-16">
      <Reveal className="flex-1">
        <p className="eyebrow">Featured case study</p>
        <h2 className="h2">{featured.title}</h2>
        <p className="p mt-5 max-w-[480px]">{featured.body}</p>
        <div className="mt-8 flex gap-9">
          {featured.metrics.map((m, i) => (
            <div key={i}>
              <div className="stat" style={{ fontSize: 40 }}>
                {m.value}
              </div>
              <p className="p text-[13px]">{m.label}</p>
            </div>
          ))}
        </div>
        <a className="btn mt-9" href={featured.href}>
          Read the case study
        </a>
      </Reveal>

      <div className="w-full max-w-[520px] lg:w-[520px]" style={{ perspective: 1400 }}>
        <motion.div
          initial={{ opacity: 0, rotateY: -22, rotateX: 8 }}
          whileInView={{ opacity: 1, rotateY: -9, rotateX: 4 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="overflow-hidden rounded-[20px]"
          style={{
            border: '1px solid var(--accent)',
            background: 'var(--panel)',
            boxShadow: '0 30px 80px rgba(0,0,0,.6),0 0 60px rgba(124,92,255,.2)',
          }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-[18px] py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--accent2)' }} />
            <span className="ml-3 text-[13px] text-[var(--muted)]">projects.controller.ts</span>
          </div>
          <div className="overflow-x-auto px-7 py-6 font-mono text-sm leading-[1.9] text-[#d6d9ee]">
            {code.map((line, i) => (
              <motion.div
                key={i}
                className="whitespace-pre"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
              >
                {line.map((tok, j) => (
                  <span key={j} style={tok.c ? { color: tok.c === 'a' ? 'var(--accent)' : 'var(--accent2)' } : undefined}>
                    {tok.t}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
