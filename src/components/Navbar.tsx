'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Mono } from './Logo'
import { nav, site } from '@/lib/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="w-full max-w-[860px]"
      >
        <div className="glass pill flex h-[72px] items-center justify-between pl-6 pr-3" style={{ background: 'rgba(7,8,15,.78)' }}>
          <a href="#" aria-label={`${site.fullName}, home`} className="flex items-center gap-3.5">
            <Mono className="h-[50px] w-[22px]" />
            <span className="flex flex-col">
              <span className="font-display text-[19px] font-semibold leading-none">Muhammad</span>
              <span className="mt-1.5 text-[10px] font-medium uppercase leading-none tracking-[0.28em] text-[var(--muted)]">
                Abdullah Sheikh
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden gap-7 text-sm font-medium text-[var(--muted)] md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <a href="#contact" className="btn" style={{ minHeight: 48, padding: '0 24px', fontSize: 14 }}>
                Hire me
              </a>
            </span>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              aria-label="Mobile"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 flex flex-col gap-1 p-3 md:hidden"
              style={{ background: 'rgba(7,8,15,.92)' }}
            >
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn mt-1">
                Hire me
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
