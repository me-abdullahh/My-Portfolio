'use client'

import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import { LogoFull } from './Logo'
import { site } from '@/lib/data'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !json.ok) throw new Error(json.error ?? 'Something went wrong.')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="wrap section" style={{ paddingBottom: 140 }}>
      <Reveal>
        <div className="moving-border">
          <div className="px-6 py-16 text-center md:px-10 md:py-[72px]" style={{ borderRadius: 31, background: 'var(--panel)' }}>
            <LogoFull className="mx-auto mb-7 h-[71px] w-[84px]" />
            <p className="eyebrow">Open to remote full-stack roles &amp; select freelance projects</p>
            <h2 className="h2" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
              Have a project in <i>mind?</i>
            </h2>
            <p className="p mx-auto mt-5 max-w-[520px]">Tell me what you’re building. I reply within one business day.</p>

            <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-[560px] gap-3.5 text-left">
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm text-[var(--muted)]">
                  Name
                  <input className="field" name="name" required minLength={2} maxLength={80} placeholder="Your name" autoComplete="name" />
                </label>
                <label className="grid gap-1.5 text-sm text-[var(--muted)]">
                  Email
                  <input className="field" type="email" name="email" required maxLength={120} placeholder="you@company.com" autoComplete="email" />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm text-[var(--muted)]">
                Message
                <textarea className="field" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="What are you building?" />
              </label>
              <button className="btn mt-2" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p role="status" aria-live="polite" className="min-h-6 text-center text-sm" style={{ color: status === 'error' ? '#fda4af' : 'var(--accent2)' }}>
                {status === 'sent' && 'Message sent. I’ll reply soon.'}
                {status === 'error' && error}
              </p>
            </form>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a className="btn2" href={`mailto:${site.email}`}>
                Email me
              </a>
              <a className="btn2" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
