import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChochKlah | Indie Games & Pixel Art',
  description: 'Your destination for the best Pixel Art Indie Games - YouTube, Twitch & more',
}

export default function Home() {
  const links = [
    { name: 'YouTube', url: 'https://www.youtube.com/@Chochklah', icon: '🎬', color: '#FF0000' },
    { name: 'Twitch', url: 'https://www.twitch.tv/chochklah', icon: '🎮', color: '#9146FF' },
    { name: 'X (Twitter)', url: 'https://x.com/ChochKlah', icon: '𝕏', color: '#000000' },
    { name: 'Instagram', url: 'https://www.instagram.com/chochklah/', icon: '📸', color: '#E4405F' },
  ]

  const videos = [
    { title: 'Top 25 BEST Pixel Art Indie Games 2026', url: 'https://www.youtube.com/watch?v=0cXREgdpg9Y' },
    { title: 'Best Looking Pixel Art Games 2025', url: 'https://www.youtube.com/watch?v=gMVDL3DumwE' },
  ]

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Profile */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            boxShadow: '0 0 30px rgba(255,255,255,0.2)'
          }}>
            🎮
          </div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>ChochKlah</h1>
          <p style={{ color: '#a0a0a0', fontSize: '1rem' }}>
            🎨 Pixel Art Indie Games
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'white',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.2s, background 0.2s'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Featured Videos */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🔥 Featured Videos</h2>
          {videos.map((video, i) => (
            <a
              key={i}
              href={video.url}
              target="_blank"
              style={{
                display: 'block',
                padding: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              ▶ {video.title}
            </a>
          ))}
        </div>

        {/* About */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>👤 About</h2>
          <p style={{ color: '#a0a0a0', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Your destination for the best Pixel Art Indie Games! 
            Reviews, showcases, and recommendations for indie game lovers.
          </p>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: '2rem', color: '#666', fontSize: '0.8rem' }}>
          <p>© 2026 ChochKlah. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
