'use client'

export default function Contact() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      fontFamily: "'Courier New', monospace",
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'white',
            marginBottom: '2rem'
          }}
        >
          ← Back
        </a>

        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          📬 Get In Touch
        </h1>
        
        <p style={{ color: '#a0a0a0', textAlign: 'center', marginBottom: '3rem' }}>
          For business inquiries, collaborations, or just to say hi!
        </p>

        {/* Email Only */}
        <a
          href="mailto:hello@chochklah.com"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
            borderRadius: '16px',
            textDecoration: 'none',
            color: '#1a1a2e',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            boxShadow: '0 4px 30px rgba(255,107,107,0.3)'
          }}
        >
          <span style={{ fontSize: '2rem' }}>📧</span>
          hello@chochklah.com
        </a>

        <p style={{ textAlign: 'center', color: '#666', marginTop: '3rem', fontSize: '0.9rem' }}>
          © 2026 ChochKlah. All rights reserved.
        </p>

      </div>
    </main>
  )
}
