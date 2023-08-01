import './globals.css'
import { Inter } from 'next/font/google'
import { SideBar } from '@/components'
import { PopupProvider } from '@/services/popupProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-CRM',
  description: 'Showcase of Next.js features.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='layout-container'>
          {/* <PopupProvider /> */}
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  )
}
