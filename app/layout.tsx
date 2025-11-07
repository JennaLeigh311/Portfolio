import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import ClientLayout from "./_layout"

const _font = Montserrat({ subsets: ["latin"] })
const _fontMono = Montserrat({ subsets: ["latin"] })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode

}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jenna's Website" />
        <title>Jenna's Website</title>
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <ClientLayout geist={_font} geistMono={_fontMono}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
