'use client'

import { useState, useEffect } from 'react'
import '../page.css'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

        {/* Right: Contact Content */}
        <div className="hero-content">
          <h1 className="hero-title">Get In Touch</h1>

          <p className="hero-role">Business &amp; Collaborations</p>

          <div className="hero-about">
            <p>
              Whether you&apos;re a developer looking to get your game covered, a brand
              interested in a partnership, or just want to say hi — I&apos;d love to hear from you!
            </p>
            <p>
              For sponsorships, game reviews, and collaborations, reach out via email
              and I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          {/* Email CTA */}
          <a href="mailto:hello@chochklah.com" className="email-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            hello@chochklah.com
          </a>

          <a href="/" className="contact-btn">← Back to Home</a>

          <p className="hero-footer">© 2026 ChochKlah. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
