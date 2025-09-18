import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'


import '../global.css'
import { ThemeProvider } from '../../components/theme-provider'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

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
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='container mx-auto'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster position='top-center' closeButton richColors />
      </body>
    </html>
  )
}
