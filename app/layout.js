"use client";
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { ContactsProvider } from './context/useContacts';
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <ContactsProvider>   
          {children}
        </ContactsProvider>
      </body>
    </html>
  )
}
