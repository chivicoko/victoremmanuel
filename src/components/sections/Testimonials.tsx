'use client'

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    quote: "Victor is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: 'Chijioke Orabueze',
    role: 'Founding Engineer',
    avatar: '/1.jpeg',
  },
  {
    quote: 'Working with Victor was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.',
    author: 'Ifeanyi Uwa',
    role: 'Frontend Engineer',
    avatar: '/2.jpeg',
  },
  {
    quote: "Victor's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: 'Chinaza Okoye',
    role: 'Engineering Lead, StartUp Labs',
    avatar: '/3.jpeg',
  },
  {
    quote: "Not only is Victor technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: 'Chrisantus Ndibe',
    role: 'CEO, Innovation Hub',
    avatar: '/5.jpeg',
  },
]

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const t = testimonials[activeIdx]

  const next = () => setActiveIdx((p) => (p + 1) % testimonials.length)
  const previous = () => setActiveIdx((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-28 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">What People Say</span>
            <span className="section-eyebrow-line" />
          </div>
          <h2 className="section-title">
            Kind words from <em>amazing people.</em>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-[780px] mx-auto">
          <div
            className="relative rounded-3xl p-10 md:p-14"
            style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.14)' }}
          >
            {/* Quote icon */}
            <div
              className="absolute -top-5 left-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: '#e8a44a', color: '#0c0c0c' }}
            >
              <Quote className="w-[14px] h-[14px]" />
            </div>

            {/* Quote text */}
            <p
              className="text-[1.3125rem] leading-[1.65] mb-8 pt-3"
              style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', color: 'var(--color-foreground)' }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                style={{
                  background: 'rgba(232,164,74,0.12)',
                  border: '2px solid rgba(232,164,74,0.3)',
                  color: '#e8a44a',
                }}
              >
                {t.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-display font-bold text-[0.9375rem] text-foreground">{t.author}</div>
                <div className="text-[0.8125rem] text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'var(--color-muted-foreground)', background: 'transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#e8a44a'
                e.currentTarget.style.color = '#e8a44a'
                e.currentTarget.style.background = 'rgba(232,164,74,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.color = 'var(--color-muted-foreground)'
                e.currentTarget.style.background = 'transparent'
              }}
              onClick={previous}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIdx ? '2rem' : '0.375rem',
                    background: i === activeIdx ? '#e8a44a' : 'rgba(255,255,255,0.14)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'var(--color-muted-foreground)', background: 'transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#e8a44a'
                e.currentTarget.style.color = '#e8a44a'
                e.currentTarget.style.background = 'rgba(232,164,74,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.color = 'var(--color-muted-foreground)'
                e.currentTarget.style.background = 'transparent'
              }}
              onClick={next}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}