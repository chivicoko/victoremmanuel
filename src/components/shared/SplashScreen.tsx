'use client'

import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    // Start exit animation after 2s of being fully visible
    const exitTimer = setTimeout(() => {
      setAnimateOut(true)
    }, 800)

    // Notify parent that splash is done after exit animation completes (2s + 1.2s)
    const doneTimer = setTimeout(() => {
      onComplete()
    }, 1100)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-background overflow-hidden
        ${animateOut ? 'animate-dropOut' : 'animate-dropIn'}
      `}
    >
      {/* Subtle ambient glow behind the name */}
      <div className="absolute w-125 h-50 bg-primary/10 rounded-full blur-3xl" />

      <h2 className="relative text-foreground text-2xl sm:text-4xl tracking-[0.25em] uppercase md:text-6xl md:tracking-[0.35em] font-bold">
        <span className="inline-block mr-3 md:mr-5">VICTOR</span>
        <span className="inline-block text-primary">OKOYE</span>
      </h2>
    </div>
  )
}
