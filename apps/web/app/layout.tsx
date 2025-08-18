import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mini Event Task',
  description: 'A simple event management application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}

