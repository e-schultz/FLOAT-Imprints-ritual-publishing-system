import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { inter, ibmPlexMono } from "./fonts"
import "./globals.css"

export const metadata = {
  title: "FLOAT.dispatch Imprint",
  description: "Zine-inspired digital artifacts from the FLOAT ecosystem",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="scanlines"></div>
          <div className="ritual-crossfade"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
