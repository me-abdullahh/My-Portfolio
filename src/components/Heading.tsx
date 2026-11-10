import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function Heading({
  eyebrow,
  children,
  center = false,
  aside,
}: {
  eyebrow: string
  children: ReactNode
  center?: boolean
  aside?: ReactNode
}) {
  return (
    <Reveal className={`mb-11 flex flex-wrap items-end gap-6 ${center ? 'justify-center text-center' : 'justify-between'}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">{children}</h2>
      </div>
      {aside}
    </Reveal>
  )
}
