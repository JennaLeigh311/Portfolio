"use client"

export default function Skills() {
  const skills = [
    "Swift",
    "C#",
    "Python",
    "C++",
    "TypeScript",
    "JavaScript",
    "SQL",
    "React",
    "Angular",
    "Node.js",
    "Next.js",
    "Git",
    "Vapor",
    "Postman",
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 hover:scale-102 transition-all duration-300 glow-accent"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
