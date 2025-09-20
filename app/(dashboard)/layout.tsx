import type { Metadata } from 'next'
import { Toaster } from 'sonner'


import '../global.css'
import { ThemeProvider } from '../../components/theme-provider'
import { SidebarInset, SidebarProvider } from '../../components/ui/sidebar'
import { AppSidebar } from '../../components/app-sidebar'
import { SiteHeader } from '../../components/site-header'



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
        <Toaster position='top-center' closeButton richColors />
        </ThemeProvider>

  )
}
