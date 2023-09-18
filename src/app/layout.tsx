import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Code Doctor',
  description: 'Homepage of Code Doctor App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      </head>
      <body className={inter.className}>
      <AuthProvider>
        <Navbar/>
        {children}
        <Toaster/>      
        <Footer/>
      </AuthProvider>
      </body>
    </html>
  )
}
