'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'motion/react'
import { stats } from '@/lib/data'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix])

  return <span ref={ref}>{`0${suffix}`}</span>
}

export default function Stats() {
  return (
    <section id="about" className="wrap relative pb-16">
      <div className="glass grid grid-cols-2 gap-y-8 px-4 py-9 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`text-center ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}>
            <div className="stat">{s.text ?? <Counter to={s.to ?? 0} suffix={s.suffix} />}</div>
            <p className="p mt-1 text-[15px]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
