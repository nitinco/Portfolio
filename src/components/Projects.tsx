import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      live:"https://nitinco.github.io/Ekrashak/",
      title: "Ekrashak",
      description: "Multi-vendor e-commerce platform for digitizing farming operations",
      details: [
        "Enables agricultural input supply and output trade",
        "Provides government scheme access and market linkage for farmers",
        "Integrated services for details, compliances, and training"
      ],
      technologies: ["Html", "CSS", "JavaScript", "E-commerce"]
    },
    {
      live:"https://nitinco.github.io/nexsphere/",
      title: "NexsPhere",
      description: "Responsive client website with modern UI/UX",
      details: [
        "Developed and deployed responsive website",
        "Showcased modern UI/UX design principles",
        "Optimized for performance across devices"
      ],
      technologies: ["Html", "CSS", "Responsive Design","JavaScript"]
    },
    {
      live:"https://github.com/nitinco/PlayQuiz",
      title: "Quiz App",
      description: "Collaborative Quiz platform",
      details: [
        "Built with Java and xml for modern interface",
        "Real-time data synchronization with Firebase",
        "User authentication and data management",
        "Interactive quiz features and scoring system",
        "Profile management and progress tracking",
        "lederboard to foster competition among users"
      ],
      technologies: ["Java", "Firebase", "Android Studio"]
    },
    {
      live:"",
      title: "Navigator",
      description: "Real-time location aggregation application",
      details: [
        "Developed using React for dynamic user interface",
        "Integrated open street API for real-time Location updates",
        "Category-based Location filtering and search",
        "Optimized performance for seamless user experience",
        ""
      ],
      technologies: ["React", "Leaflet JS", "JavaScript","MUI", "Open Street Maps API"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-primary)] group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      {project.title}
                      <a href={project.live}>
                        <ExternalLink  className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      
                    </CardTitle>
                    <CardDescription className="text-foreground/80">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge 
                      key={techIdx}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
