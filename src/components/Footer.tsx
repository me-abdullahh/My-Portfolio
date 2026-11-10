import { Mono } from './Logo'
import { site } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="wrap flex flex-col items-center justify-between gap-4 border-t border-white/10 pb-28 pt-7 text-sm text-[var(--muted)] sm:flex-row">
      <span className="flex items-center gap-3">
        <Mono className="h-8 w-3.5" />© {new Date().getFullYear()} {site.fullName}
      </span>
      <span className="flex gap-7">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
        <a href={`mailto:${site.email}`} className="hover:text-white">
          Email
        </a>
        <a href={site.upwork} className="hover:text-white">
          Upwork
        </a>
      </span>
    </footer>
  )
}
