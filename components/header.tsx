"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<string>("light")
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/personal", label: "About Me" },
    { href: "/contact", label: "Contact Me" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold hover:opacity-70 transition-opacity">
            Jenna Leigh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-2 rounded-lg transition-all ${
                  pathname === link.href ? "bg-card border border-accent" : "hover:text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border hover:border-accent transition-all"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border hover:border-accent transition-all"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-border hover:border-accent transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  pathname === link.href ? "bg-card border border-accent" : "hover:text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
