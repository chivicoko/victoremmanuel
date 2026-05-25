'use client'

import { Mail, Phone, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'victor.c.okoye@gmail.com', href: 'mailto:victor.c.okoye@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+2348028845693', href: 'tel:+2348028845693' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/chivicoko', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/codesvictor/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/codes_victor_/', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/+2348028845693', label: 'WhatsApp' },
]

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        username: formData.email,
        subject: `From My Site: ${formData.email}`,
      }, publicKey)

      setSubmitStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." })
      setFormData({ name: '', email: '', message: '' })
    } catch (error: unknown) {
      const err = error as { text?: string; message?: string }
      console.error('EmailJS error:', error)
      setSubmitStatus({
        type: 'error',
        message: err.text || err.message || 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '0.75rem',
    color: 'var(--color-foreground)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <section id="contact" className="py-28 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Get In Touch</span>
            <span className="section-eyebrow-line" />
          </div>
          <h2 className="section-title">
            Let&apos;s build <em>something great.</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[520px] mx-auto text-[0.9375rem] leading-[1.75]">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div
            className="rounded-2xl p-8"
            style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-display font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text" required placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#e8a44a'; e.target.style.boxShadow = '0 0 0 3px rgba(232,164,74,0.08)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <div>
                <label className="block text-xs font-display font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email" required placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#e8a44a'; e.target.style.boxShadow = '0 0 0 3px rgba(232,164,74,0.08)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <div>
                <label className="block text-xs font-display font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5} required placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = '#e8a44a'; e.target.style.boxShadow = '0 0 0 3px rgba(232,164,74,0.08)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center" disabled={isLoading}>
                {isLoading ? 'Sending…' : <><Send className="w-4 h-4" /> Send Message</>}
              </button>

              {submitStatus.type && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl text-sm"
                  style={{
                    background: submitStatus.type === 'success' ? 'rgba(74,232,164,0.08)' : 'rgba(232,90,74,0.08)',
                    border: `1px solid ${submitStatus.type === 'success' ? 'rgba(74,232,164,0.2)' : 'rgba(232,90,74,0.2)'}`,
                    color: submitStatus.type === 'success' ? '#4ae8a4' : '#e85a4a',
                  }}
                >
                  {submitStatus.type === 'success'
                    ? <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl p-7"
              style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-display font-bold mb-5 text-foreground">Contact Information</h3>
              <div className="space-y-1">
                {contactInfo.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: 'rgba(232,164,74,0.12)', border: '1px solid rgba(232,164,74,0.2)', color: '#e8a44a' }}
                    >
                      <item.icon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground/60 mb-0.5">{item.label}</div>
                      <div className="text-[0.9375rem] font-medium text-foreground">{item.value}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-xs text-muted-foreground/60">Let&apos;s chat:</span>
                {socialLinks.map((s) => (
                  <Link key={s.label} href={s.href} className="social-link" aria-label={s.label}>
                    <s.icon className="w-[15px] h-[15px]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(232,164,74,0.08)', border: '1px solid rgba(232,164,74,0.2)' }}
            >
              <div className="flex items-center gap-2.5 mb-3 font-display font-bold" style={{ color: '#e8a44a' }}>
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                Currently Available
              </div>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.75]">
                I&apos;m currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let&apos;s talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}