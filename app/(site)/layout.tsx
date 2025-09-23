export const revalidate = 3600
import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'

import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { ThemeProvider } from '../../components/theme-provider'
import '../global.css'
import ScrollToTop from '../../components/ScrollToUp'

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
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div className='flex min-h-screen flex-col'>
        <Navbar />
        <main className='container mx-auto flex-grow'>{children}</main>
        <Footer />
        <Toaster position='top-center' closeButton richColors />
        <ScrollToTop/>
      </div>
    </ThemeProvider>
  )
}
