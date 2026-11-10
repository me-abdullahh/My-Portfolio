import Heading from './Heading'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const items = [...testimonials, ...testimonials]
  return (
    <section className="section">
      <div className="wrap">
        <Heading eyebrow="Kind words" center>
          Trusted by <i>clients &amp; students</i>
        </Heading>
      </div>
      <div className="fade-x overflow-hidden">
        <div className="marquee" style={{ animationDuration: '50s' }}>
          {items.map((t, i) => (
            <figure key={i} className="glass mr-5 w-[340px] shrink-0 p-8 md:w-[380px]" style={{ margin: '0 20px 0 0' }}>
              <blockquote className="p m-0 text-[var(--text)]">{t.quote}</blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-semibold text-[var(--accent2)]">{t.name}</div>
                <div className="p text-[13px]">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
