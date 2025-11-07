"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Github, Linkedin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>

          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80 mb-8">
              I'm always interested in connecting with new people. Feel free to reach out
              through any of the means below. I'll get back to you as soon as possible!
            </p>
          </div>

          {/* Contact Icons */}
          <div className="flex justify-center gap-8 mb-16">
            <a
              href="https://github.com/JennaLeigh311"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-lg hover:-rotate-1 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 group-hover:text-accent transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/jenna-leigh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-lg hover:-rotate-1 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 group-hover:text-accent transition-colors" />
            </a>

            <a
              href="tel:(509)370-6430"
              className="p-4 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-lg hover:-rotate-1 transition-all duration-300 group"
              aria-label="Phone"
            >
              <Phone className="w-8 h-8 group-hover:text-accent transition-colors" />
            </a>

            <a
              href="mailto:jennaleigh311@gmail.com"
              className="p-4 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-lg hover:-rotate-1 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-8 h-8 group-hover:text-accent transition-colors" />
            </a>
          </div>

          {/* Additional contact info section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 bg-card border border-border rounded-2xl text-center glow-accent">
              <h3 className="font-semibold mb-2">Based In Spokane, WA</h3>
              <p className="text-foreground/80 text-sm">Available for remote work and relocation</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl text-center glow-accent">
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-foreground/80 text-sm">Open to chat!</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
