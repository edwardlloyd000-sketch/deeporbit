import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeepOrbit',
  description: 'Deep-space market intelligence interface prototype.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
