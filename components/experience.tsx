"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Family Promise",
      period: "November 2025 - Present",
      description:
        "Contributed to an internal tool in C# to automate landlord and property matching for housing homeless families at a national nonprofit serving 3K+ local individuals annually, streamlining housing procurement for faster family support",
      link: "https://www.familypromise.org",
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Whitworth University",
      period: "May 2025 - August 2025",
      description:
        "Designed and presented a 96% accurate COVID-19 diagnosis device utilizing light sensing and temperature control on embedded software in Python at the leading international conference for optics (SPIE Photonics West 2026)",
      link: "https://microdevices.whitworth.edu/index.html",
    },
  ]

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-md hover:-rotate-1 transition-all duration-300 glow-accent"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-foreground/80">{exp.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
