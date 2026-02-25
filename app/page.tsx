'use client'

import { useState, useEffect } from 'react'
import './page.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const links = [
    {
      name: 'YouTube', url: 'https://www.youtube.com/@Chochklah', bg: '#FF0000',
      svg: <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
    },
    {
      name: 'X', url: 'https://x.com/ChochKlah', bg: '#000000',
      svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
    },
    {
      name: 'Instagram', url: 'https://www.instagram.com/chochklah/', bg: '#E4405F',
      svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    },
    {
      name: 'Ko-fi', url: 'https://ko-fi.com/chochklah', bg: '#FF6699',
      text: '☕'
    },
  ]

  return (
    <main className="hero-main">
      {/* Animated Background Stars */}
      {mounted && (
        <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          {[...Array(60)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              background: 'white',
              borderRadius: '50%',
              opacity: 0.4,
              animation: `twinkle ${2 + (i % 3)}s infinite`,
              animationDelay: `${(i * 0.15) % 3}s`
            }} />
          ))}
        </div>
      )}

      {/* Hero Layout */}
      <div className="hero-layout">

        {/* Left: Character Image */}
        <div className="hero-image-wrap">
          <img
            src="/Choch.png"
            alt="Choch"
            className="hero-image"
          />
        </div>

        {/* Right: Content */}
        <div className="hero-content">
          <h1 className="hero-title">ChochKlah</h1>

          <p className="hero-role">Content Creator / Gamer</p>

          <p className="hero-desc">
            Pixel art indie games, honest reviews, and let&apos;s plays.
            Join me for the adventure — new videos every week!
          </p>

          {/* Social Links */}
          <div className="hero-links">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                title={link.name}
                className="icon-btn"
                style={{ background: link.bg, boxShadow: `0 4px 20px ${link.bg}66` }}
              >
                {link.svg}
              </a>
            ))}
            <a
              href="/contact"
              title="Contact"
              className="icon-btn"
              style={{ background: '#555', boxShadow: '0 4px 20px rgba(85,85,85,0.4)' }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>

          <p className="hero-footer">© 2026 ChochKlah. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
