import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://chochklah.com'),
  title: {
    default: 'ChochKlah | Indie Games, Speedrunning & Let\'s Plays',
    template: '%s | ChochKlah',
  },
  description: 'YouTube Partnered variety content creator, speedrunner, and indie game enthusiast. Honest reviews, let\'s plays, and hidden gems every week.',
  keywords: ['ChochKlah', 'indie games', 'speedrunner', 'YouTube', 'let\'s plays', 'pixel art games', 'variety gaming', 'content creator'],
  authors: [{ name: 'ChochKlah' }],
  creator: 'ChochKlah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chochklah.com',
    siteName: 'ChochKlah',
    title: 'ChochKlah | Indie Games, Speedrunning & Let\'s Plays',
    description: 'YouTube Partnered variety content creator, speedrunner, and indie game enthusiast. Honest reviews, let\'s plays, and hidden gems every week.',
    images: [
      {
        url: '/Choch.png',
        width: 1200,
        height: 630,
        alt: 'ChochKlah - Content Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ChochKlah',
    creator: '@ChochKlah',
    title: 'ChochKlah | Indie Games, Speedrunning & Let\'s Plays',
    description: 'YouTube Partnered variety content creator, speedrunner, and indie game enthusiast.',
    images: ['/Choch.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://chochklah.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
