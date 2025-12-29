import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veqlyx - Secure Video Approval Platform for Creators',
  description: 'The ultimate video approval platform for YouTube creators. Secure middleware between creators and editors with approval-first workflow, large file support, and end-to-end encryption.',
  keywords: 'video approval, YouTube workflow, content creator tools, video collaboration, secure upload platform',
  authors: [{ name: 'Veqlyx Team' }],
  creator: 'Veqlyx',
  publisher: 'Veqlyx',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veqlyx.com',
    siteName: 'Veqlyx',
    title: 'Veqlyx - Secure Video Approval Platform for Creators',
    description: 'The ultimate video approval platform for YouTube creators. Secure middleware between creators and editors.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veqlyx - Secure Video Approval Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veqlyx - Secure Video Approval Platform for Creators',
    description: 'The ultimate video approval platform for YouTube creators. Secure middleware between creators and editors.',
    images: ['/og-image.png'],
  },
  icons: {
  icon: '/logo.ico.png',
  shortcut: '/logo.ico.png',
  apple: '/logo.ico.png',
},
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}