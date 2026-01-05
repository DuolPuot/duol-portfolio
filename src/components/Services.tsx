import { Code, Palette, Shield, Video, Globe, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building robust and scalable applications using modern technologies and best practices.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and interactive websites with cutting-edge frontend and backend technologies.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Implementing security measures and protecting digital assets from cyber threats.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Producing engaging digital content across various platforms to tell compelling stories.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designing visually appealing graphics that communicate ideas effectively and creatively.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and managing efficient database solutions using MongoDB and Oracle.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
