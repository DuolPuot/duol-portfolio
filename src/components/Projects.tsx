import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: " Lang App",
      description: "The Lang App is a culturally grounded digital platform designed for the Chie-lang community to preserve, share, and celebrate their collective history. Built with React, Node.js, and MongoDB.",
      technologies: ["React JS", "Node JS", "MongoDB", "JavaScript"],
      gradient: "from-primary/20 to-primary/5",
    },
    {
      title: "Humanity & Inclusion(HI) Management System",
      description: "The Humanity & Inclusion (HI) Management System is a comprehensive web-based application designed to streamline the administration of organizational operations. Developed using Java and Oracle database.",
      technologies: ["Java", "Oracle", "HTML & CSS", "JavaScript"],
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring and threat detection system with automated alerts and detailed reporting capabilities. PHP backend with responsive frontend.",
      technologies: ["PHP", "JavaScript", "HTML & CSS", "MongoDB"],
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing some of my completed work across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground min-h-[80px]">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
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
