export const metadata = {
  title: 'ChochKlah | Indie Games & Pixel Art',
  description: 'Your destination for the best Pixel Art Indie Games - YouTube & more',
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
