import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'


import '../global.css'
import { ThemeProvider } from '../../components/theme-provider'
import { SidebarInset, SidebarProvider } from '../../components/ui/sidebar'
import { AppSidebar } from '../../components/app-sidebar'
import { SiteHeader } from '../../components/site-header'

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
          <SidebarProvider
            style={
              {
                '--sidebar-width': 'calc(var(--spacing) * 72)',
                '--header-height': 'calc(var(--spacing) * 12)',
              } as React.CSSProperties
            }
          >
            <AppSidebar variant='inset' />
            <SidebarInset className=''>
              <SiteHeader />
              <main className='p-3 sm:p-6 md:p-8'>{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
        <Toaster position='top-center' closeButton richColors />
      </body>
    </html>
  )
}
