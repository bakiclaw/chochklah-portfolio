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
          📬 Contact ChochKlah
        </h1>
        
        <p style={{ color: '#a0a0a0', textAlign: 'center', marginBottom: '2rem' }}>
          For business inquiries, collaborations, or just to say hi!
        </p>

        {/* Contact Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          <a
            href="mailto:chochklah@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>📧</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>Email</div>
              <div style={{ color: '#888', fontSize: '0.9rem' }}>chochklah@gmail.com</div>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@Chochklah"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              background: 'rgba(255,0,0,0.1)',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'white',
              border: '1px solid rgba(255,0,0,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>▶️</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>YouTube</div>
              <div style={{ color: '#888', fontSize: '0.9rem' }}>@Chochklah</div>
            </div>
          </a>

          <a
            href="https://x.com/ChochKlah"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              background: 'rgba(29,161,242,0.1)',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'white',
              border: '1px solid rgba(29,161,242,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>𝕏</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>X / Twitter</div>
              <div style={{ color: '#888', fontSize: '0.9rem' }}>@ChochKlah</div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/chochklah/"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              background: 'rgba(228,64,95,0.1)',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'white',
              border: '1px solid rgba(228,64,95,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>📸</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>Instagram</div>
              <div style={{ color: '#888', fontSize: '0.9rem' }}>@chochklah</div>
            </div>
          </a>

        </div>

        {/* Brand Info */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginTop: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>📊 What I Offer</h3>
          <ul style={{ color: '#aaa', lineHeight: '1.8' }}>
            <li>🎮 Game reviews & sponsorships</li>
            <li>🎬 Content collaborations</li>
            <li>🕹️ Indie game features</li>
            <li>📢 Brand partnerships</li>
          </ul>
        </div>

        <p style={{ textAlign: 'center', color: '#666', marginTop: '2rem', fontSize: '0.85rem' }}>
          © 2026 ChochKlah. All rights reserved.
        </p>

      </div>
    </main>
  )
}
