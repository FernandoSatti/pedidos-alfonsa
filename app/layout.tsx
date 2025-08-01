import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sistema de gestión',
  description: 'organización de pedidos',
  icons: {
    icon: [
      { url: '/alfonsa32x32.png', sizes: '32x32', type: 'image/png' },
      '/alfonsa32x32.png', // fallback
    ],
    apple: '/alfonsa32x32.png', // para dispositivos Apple
    other: {
      // por si quieres un manifest u otros
      rel: 'manifest',
      url: '/site.webmanifest', // opcional, solo si tienes uno
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
        {/* En caso de que quieras redundancia o usar link directo: */}
        <link rel="icon" type="image/png" sizes="32x32" href="/alfonsa32x32.png" />
        <link rel="apple-touch-icon" href="/alfonsa32x32.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
