"use client"

export default function Projects() {
  const projects = [
    {
      title: "Culinary Lounge",
      description: "Social media app for the cooking community enabling users to post recipes, browse liked content for inspiration, and personalize their cooking profile",
      technologies: ["SwiftUI", "Vapor", "MySQL"],
      link: "https://github.com/JennaLeigh311/Culinary-Lounge",
    },
    {
      title: "Family Promise",
      description: "Trauma-informed website featuring survivor stories and homelessness statistics dashboards to drive donor awareness and engagement",
      technologies: ["JavaScript", "Node.js", "React"],
      link: "",
    },
    {
      title: "Let Him Shoot",
      description: "Scouting platform/dashboard for University of Illinois basketball team to identify 3PT shooter threats through real-time classification",
      technologies: ["TypeScript", "React", "Next.js", "SQLite"],
      link: "https://github.com/JennaLeigh311/Let-Him-Shoot",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-md hover:-rotate-1 transition-all duration-300 group glow-accent"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
