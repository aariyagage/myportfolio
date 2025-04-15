import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Aariya Gage',
  description: 'Personal portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body className="bg-white dark:bg-black">
        {children}
      </body>
    </html>
  )
}
