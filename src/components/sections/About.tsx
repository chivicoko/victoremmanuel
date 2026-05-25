'use client';

import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'

const highlights = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code that stands the test of time.' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and delivering lightning-fast user experiences.' },
  { icon: Users, title: 'Collaboration', description: 'Working closely with teams to bring ideas to life.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Staying ahead with the latest technologies and best practices.' },
]

export const About = () => {
  return (
    <section id="about" className="py-28 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-300 mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">About Me</span>
            </div>
            <h2 className="section-title mb-8">
              Building the future,{' '}
              <em>one component at a time.</em>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-[0.9375rem]">
              <p>
                I&apos;m a passionate software engineer with over 5 years of experience crafting digital products that make a difference. My journey started with a curiosity for how things work on the web, and it has evolved into a deep expertise in modern frontend technologies.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building everything from sleek landing pages to complex enterprise applications. My approach combines technical excellence with a keen eye for design and user experience.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <blockquote
              className="mt-8 pl-5 py-4 pr-4 rounded-r-xl text-[1.0625rem] leading-[1.65]"
              style={{
                borderLeft: '3px solid #e8a44a',
                background: '#141414',
                fontFamily: "'DM Serif Display', serif",
                fontStyle: 'italic',
                color: 'var(--color-foreground)',
              }}
            >
              &ldquo;My mission is to create digital experiences that are not just functional, but truly delightful — products that users love to use and developers love to maintain.&rdquo;
            </blockquote>
          </div>

          {/* Right — highlights grid */}
          <div
            className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-7 transition-colors"
                style={{ background: '#141414' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#141414')}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(232,164,74,0.12)', border: '1px solid rgba(232,164,74,0.2)', color: '#e8a44a' }}
                >
                  <h.icon className="w-4.5 h-4.5" />
                </div>
                <div className="font-display font-bold text-[0.9375rem] mb-1.5 text-foreground">{h.title}</div>
                <div className="text-[0.8125rem] text-muted-foreground leading-[1.65]">{h.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}