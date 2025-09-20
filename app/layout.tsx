import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'

import './global.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'hazTech',
  description: 'Hardware Store For PCs And Laptops',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        // ${geistSans.variable} ${geistMono.variable}
        className={`overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
