'use client'

import "./globals.css"
import SideMenu from "./components/SideMenu/SideMenu"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <SideMenu />

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
