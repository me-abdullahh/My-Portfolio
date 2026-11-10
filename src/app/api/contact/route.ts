import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(3000),
  company: z.string().optional(), // honeypot: real users leave this empty
})

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check your name, email and message.' }, { status: 400 })
  }

  const { name, email, message, company } = parsed.data
  if (company) return NextResponse.json({ ok: true }) // bot caught, pretend success

  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

  if (!key || !to) {
    console.log('[contact] email delivery not configured. Message received:', { name, email, message })
    return NextResponse.json({ ok: true, delivered: false })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Could not send your message. Please email me directly.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true, delivered: true })
}
