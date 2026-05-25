'use client'

import Image from 'next/image'
import { ArrowUpRight, Github, LayoutGrid, List } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    title: 'Fintech Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.',
    image: '/projects/project1.png',
    tags: ['React', 'Typescript', 'NodeJS'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.',
    image: '/projects/project2.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Writing Assistant',
    description: 'An intelligent writing tool powered by GPT-4, helping users create better content faster.',
    image: '/projects/project3.png',
    tags: ['React', 'OpenAI', 'Python', 'FastAPI'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative workspace for teams with real-time updates, task tracking, and integrations.',
    image: '/projects/project4.png',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
    link: '#',
    github: '#',
  },
]

export const Projects = () => {
  const [gridView, setGridView] = useState(true)

  return (
    <section id="projects" className="py-28 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Featured Work</span>
            </div>
            <h2 className="section-title">
              Projects that{' '}
              <em>make an impact.</em>
            </h2>
          </div>

          {/* Toggle */}
          <div
            className="flex rounded-full overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <button
              onClick={() => setGridView(false)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-display font-semibold transition-all"
              style={{
                background: !gridView ? '#e8a44a' : 'transparent',
                color: !gridView ? '#0c0c0c' : 'var(--color-muted-foreground)',
              }}
            >
              <List className="w-3.5 h-3.5" /> List
            </button>
            <button
              onClick={() => setGridView(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-display font-semibold transition-all"
              style={{
                background: gridView ? '#e8a44a' : 'transparent',
                color: gridView ? '#0c0c0c' : 'var(--color-muted-foreground)',
              }}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid
            </button>
          </div>
        </div>

        {/* Grid view */}
        {gridView ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#141414',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '16/9', background: '#1a1a1a' }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(12,12,12,0.7)' }}
                  >
                    <Link
                      href={p.link}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: 'var(--color-foreground)', color: '#0c0c0c' }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={p.github}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: 'var(--color-foreground)', color: '#0c0c0c' }}
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="text-xs font-display tracking-[0.1em] uppercase mb-2" style={{ color: 'rgba(122,119,111,0.5)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display font-bold text-[1.125rem] mb-2 text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.65] mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List view */
          <div
            className="flex flex-col gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-8 px-8 py-6 transition-colors"
                style={{ background: '#141414' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#141414')}
              >
                <span className="font-display text-xs tracking-[0.1em] text-muted-foreground/40 w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="font-display font-bold text-[1rem] text-foreground mb-1">{p.title}</div>
                  <div className="text-[0.8125rem] text-muted-foreground leading-snug">{p.description}</div>
                </div>
                <div className="hidden md:flex gap-1.5 flex-shrink-0">
                  {p.tags.slice(0, 2).map((t, j) => <span key={j} className="tag">{t}</span>)}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Link href={p.github} className="social-link" aria-label="GitHub"><Github className="w-[14px] h-[14px]" /></Link>
                  <Link href={p.link} className="social-link" aria-label="Live"><ArrowUpRight className="w-[14px] h-[14px]" /></Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="#" className="btn-secondary">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}