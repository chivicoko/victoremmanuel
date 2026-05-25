'use client'

import { useState } from 'react'
import SplashScreen from '@/components/shared/SplashScreen'

export default function Template({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {/* Page content fades in after splash exits */}
      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: splashDone ? 'opacity 0.4s ease-in' : 'none',
        }}
      >
        {children}
      </div>
    </>
  )
}
