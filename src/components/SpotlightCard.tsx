'use client'

import type { MouseEvent, ReactNode } from 'react'

/** Glass card with a cursor-following glow. Renders a link when `href` is given. */
export default function SpotlightCard({
  children,
  className = '',
  href,
}: {
  children: ReactNode
  className?: string
  href?: string
}) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const cls = `glass spot transition-transform duration-300 hover:-translate-y-1 ${className}`
  return href ? (
    <a href={href} onMouseMove={onMove} className={cls}>
      {children}
    </a>
  ) : (
    <div onMouseMove={onMove} className={cls}>
      {children}
    </div>
  )
}
