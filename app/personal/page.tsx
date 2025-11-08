"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Personal() {
  const hobbies = [
    {
      title: "Reading",
      description: "My favorite authors include Jane Austen and Frank Herbert",
      link: "https://photos.google.com",
    },
    {
      title: "Piano",
      description: "I've been learning piano for a couple months now and I'm loving it! My favorite scale is D major.",
      link: "https://photos.google.com",
    },
    {
      title: "Baking",
      description: "I started out with Lava Cakes and Cinnamon Rolls, which I've made a ton. Now I bake a lot of cookies, muffins, and fruit tarts.",
      link: "https://photos.google.com",
    },
    {
      title: "Eating food",
      description: "Besides cooking/baking, I also LOVE food! Some of my top foods are sushi, french pastry, and boba",
      link: "https://photos.google.com",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12">About Me</h1>

          <div className="mb-12 flex justify-center">
            <img
              src="/jenna.png"
              alt="Personal photo"
              className="w-48 h-48 rounded-2xl object-cover border-2 border-accent shadow-lg"
            />
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">My Hobbies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hobbies.map((hobby, index) => (
                  <a
                    key={index}
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-card border border-border rounded-2xl glow-accent hover:border-accent hover:shadow-lg hover:-rotate-1 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                    <p className="text-foreground/80">{hobby.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </section>
      <section className="px-80 pb-30 flex justify-center">
        <iframe
          style={{ borderRadius: "50px" }}
          src="https://open.spotify.com/embed/track/5xaFYSG9oSO9vHV23t281o?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </main>
  )
}
