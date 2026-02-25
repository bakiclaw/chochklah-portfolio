'use client'

import { useState, useEffect } from 'react'

const slides = [
  {
    title: "🎮 Pixel Art Indie Games",
    subtitle: "Your destination for the best indie games!",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
  },
  {
    title: "🏆 Game Reviews",
    subtitle: "Honest reviews & recommendations",
    bg: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)"
  },
  {
    title: "🎬 Let's Plays",
    subtitle: "Join the adventure!",
    bg: "linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%)"
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const links = [
    { name: 'YouTube', url: 'https://www.youtube.com/@Chochklah', icon: '▶️', color: '#FF0000' },
    { name: 'Twitch', url: 'https://www.twitch.tv/chochklah', icon: '🎮', color: '#9146FF' },
    { name: 'X', url: 'https://x.com/ChochKlah', icon: '𝕏', color: '#1DA1F2' },
    { name: 'Instagram', url: 'https://www.instagram.com/chochklah/', icon: '📸', color: '#E4405F' },
  ]

  return (
    <main style={{
      minHeight: '100vh',
      background: slides[currentSlide].bg,
      color: 'white',
      fontFamily: "'Courier New', monospace",
      transition: 'background 1s ease',
      overflow: 'hidden'
    }}>
      {/* Animated Background Stars */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(50)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: 'white',
            borderRadius: '50%',
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`
          }} />
        ))}
      </div>

      {/* Slide Indicator */}
      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: i === currentSlide ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === currentSlide ? '#feca57' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }} />
        ))}
      </div>

      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '2rem 1rem',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Banner - Full Width */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          height: '180px',
          overflow: 'hidden',
          marginBottom: '60px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          <img 
            src="/banner.jpg" 
            alt="ChochKlah"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Profile Picture */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
          margin: '-50px auto 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          boxShadow: '0 0 30px rgba(255,255,255,0.3)',
          position: 'relative',
          zIndex: 1,
          border: '4px solid #1a1a2e'
        }}>
          🎮
        </div>

        {/* Animated Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '0.5rem',
            textShadow: '0 0 20px rgba(254,202,87,0.5)',
            animation: 'pulse 2s infinite'
          }}>
            {slides[currentSlide].title}
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1.25rem',
                background: `${link.color}22`,
                borderRadius: '16px',
                border: `2px solid ${link.color}44`,
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/contact"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(45deg, #feca57, #ff6b6b)',
            borderRadius: '12px',
            textDecoration: 'none',
            color: '#1a1a2e',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(254,202,87,0.3)'
          }}
        >
          📬 Contact Me
        </a>

        {/* Footer */}
        <p style={{ textAlign: 'center', color: '#666', fontSize: '0.85rem' }}>
          © 2026 ChochKlah. All rights reserved.
        </p>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
        `}</style>
      </div>
    </main>
  )
}
