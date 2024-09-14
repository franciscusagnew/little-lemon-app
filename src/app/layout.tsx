import { Providers } from './providers'
import './globals.css'
import { karla } from './fonts'
import { ReactNode } from 'react'
import NavBar from './components/NavBar'
import FooterNav from './components/FooterNav'

export const metadata = {
  title: {
    template: '%s | Little Lemon Restaurant',
    default: 'Little Lemon Restaurant',
  },
  applicationName: 'Little Lemon Restaurant App',
  description:
    'Little Lemon Restaurant is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
  icons: {
    icon: '/icon.png',
    shortcut: '/shorcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  authors: [
    {
      name: 'Franciscus Agnew',
      url: 'https://www.linkedin.com/in/franciscusagnew/',
    },
  ],
  creator: 'Franciscus Agnew',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Little Lemon',
    'Mediterranean',
    'Food',
    'Restaurant',
    'family-owned',
    'traditional',
    'modern',
  ],
  openGraph: {
    title: 'Little Lemon Restaurant',
    description:
      'Little Lemon Restaurant is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
    url: 'https://littlelemon.com',
    siteName: 'Little Lemon Restaurant',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className={`${karla.variable}`}>
      <body className='font-karla'>
        <Providers>
          <NavBar />
          <main className='h-full'>{children}</main>
          <FooterNav />
        </Providers>
      </body>
    </html>
  )
}
