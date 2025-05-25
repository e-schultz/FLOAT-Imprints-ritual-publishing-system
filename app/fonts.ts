import { Inter } from "next/font/google"

// Use Google Fonts for Inter (more reliable than local fonts)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// For IBM Plex Mono, we'll use Google Fonts instead of local fonts
// This is more reliable for deployment
import { IBM_Plex_Mono } from "next/font/google"

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
})
