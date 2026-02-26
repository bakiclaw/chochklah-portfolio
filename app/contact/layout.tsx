import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with ChochKlah for business inquiries, sponsorships, game reviews, and collaborations.',
  openGraph: {
    title: 'Contact ChochKlah',
    description: 'Get in touch for sponsorships, game reviews, and collaborations.',
    url: 'https://chochklah.com/contact',
  },
  alternates: {
    canonical: 'https://chochklah.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
