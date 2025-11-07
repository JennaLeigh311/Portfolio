"use client"

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">Hi, I'm Jenna Leigh</h1>
        <p className="text-lg sm:text-xl text-muted-foreground text-balance">
          Computer Science Student | Rewriting the Code Member
        </p>
        <div className="pt-4">
          <a
            href="https://drive.google.com/file/d/1-lgivvaesp8KD3qjIubzK7DU_uEBx7-z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 hover:scale-102 transition-all duration-300 font-medium glow-accent"
          >
            See Resume
          </a>
        </div>
      </div>
    </section>
  )
}
