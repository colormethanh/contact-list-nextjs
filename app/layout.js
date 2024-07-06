"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import { ContactsProvider } from './context/useContacts'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactsProvider>   
          {children}
        </ContactsProvider>
      </body>
    </html>
  )
}
