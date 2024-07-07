"use client";
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { ContactsProvider } from './context/useContacts';
import Navbar from './components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ContactsProvider>   
          {children}
        </ContactsProvider>
      </body>
    </html>
  )
}
