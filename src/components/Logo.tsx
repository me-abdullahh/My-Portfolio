import type { CSSProperties } from 'react'

type Props = { className?: string; style?: CSSProperties }

/** Crown + MA monogram, coloured by the theme gradient. */
export function Mono({ className = '', style }: Props) {
  return <span aria-hidden="true" className={`mono ${className}`} style={style} />
}

/** Full logo lockup (monogram + name), coloured by the theme gradient. */
export function LogoFull({ className = '', style }: Props) {
  return <span aria-hidden="true" className={`logo ${className}`} style={style} />
}
