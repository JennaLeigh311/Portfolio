"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect } from "react"

interface ClientLayoutProps {
  children: React.ReactNode
  geist: any
  geistMono: any
}

export default function ClientLayout({ children, geist, geistMono }: ClientLayoutProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
