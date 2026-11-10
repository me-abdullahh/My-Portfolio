'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from './Reveal'
import { faqs } from '@/lib/data'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="wrap section flex flex-col gap-12 lg:flex-row lg:gap-16">
      <Reveal className="lg:w-[360px] lg:shrink-0">
        <p className="eyebrow">FAQ</p>
        <h2 className="h2">
          Good <i>questions</i>
        </h2>
        <p className="p mt-5">Anything else you’d like to know? Send a message and I’ll get back to you.</p>
        <a className="btn mt-7" href="#contact">
          Ask me anything
        </a>
      </Reveal>
      <div className="flex-1 border-t border-white/10">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="border-b border-white/10">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 bg-transparent py-6 text-left"
              >
                <span className="t text-xl" style={{ color: isOpen ? 'var(--text)' : 'var(--muted)' }}>
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="text-2xl leading-none"
                  style={{ color: isOpen ? 'var(--accent2)' : 'var(--muted)' }}
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p max-w-[520px] pb-6">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
