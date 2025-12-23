import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Study Companion",
    description:
      "An intelligent study assistant that uses AI to generate personalized quizzes and flashcards from course materials.",
    image: "/ai-study-app-interface.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Campus Event Manager",
    description:
      "A web platform for university students to discover, create, and manage campus events with real-time updates.",
    image: "/event-management-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Code Snippet Library",
    description:
      "A collaborative platform for developers to share, discover, and organize code snippets with syntax highlighting.",
    image: "/code-editor-interface-dark.jpg",
    tags: ["Vue.js", "Firebase", "Prism.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Fitness Tracker App",
    description:
      "Mobile-responsive fitness tracking application with workout plans, progress tracking, and social features.",
    image: "/fitness-tracking-app-interface.png",
    tags: ["React Native", "PostgreSQL", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of projects I've worked on, showcasing my skills in web development and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-balance">{project.title}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
