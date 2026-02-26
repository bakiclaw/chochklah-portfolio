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
      name: 'Ko-fi', url: 'https://ko-fi.com/chochklah', bg: '#FF5E5B',
      svg: <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/></svg>
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

          <div className="hero-about">
            <p>
              Hi there! I&apos;m Chochklah. I&apos;m a YouTube Partnered variety content creator,
              speedrunner, and a proud dad. What started as a hobby for sharing cool video games
              has grown into a passion, and I&apos;m thrilled you&apos;re here.
            </p>
            <p>
              I focus on variety gaming, which means you never quite know what we&apos;re going
              to play next! However, my true love is diving into the indie game scene. I love
              finding those hidden gems, experiencing wildly creative stories, and shining a
              spotlight on hardworking developers.
            </p>
            <p className="hero-quote">
              &ldquo;I run on good vibes and high energy. My goal is simple: have an absolute
              blast and keep things fresh with crisp production value, non-stop laughs, and a
              heavy dose of top-tier memery.&rdquo;
            </p>
          </div>

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
          </div>

          <a href="/contact" className="contact-btn">Contact Me</a>

          <p className="hero-footer">© 2026 ChochKlah. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
