import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import ClientAnalytics from './components/analytics'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Yash Narayan - Portfolio',
    template: '%s | Yash Narayan',
  },
  description: 'Full-stack developer passionate about creating elegant solutions with modern technologies.',
  openGraph: {
    title: 'Yash Narayan - Portfolio',
    description: 'Full-stack developer passionate about creating elegant solutions with modern technologies.',
    url: baseUrl,
    siteName: 'Yash Narayan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-neutral-800"
      suppressHydrationWarning={true}
    >
      <body className="antialiased">
        <div className="max-w-4xl mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <ClientAnalytics />
          </main>
        </div>
      </body>
    </html>
  )
}
