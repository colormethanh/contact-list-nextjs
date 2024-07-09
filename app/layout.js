"use client";
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { ContactsProvider } from './context/useContacts';
import Navbar from './components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);
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
