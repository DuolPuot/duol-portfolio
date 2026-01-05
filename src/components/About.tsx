import { Code2, Palette, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "PHP",
    "Java",
    "MongoDB",
    "Oracle",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Profile Image */}
          <div className="animate-fade-in flex justify-center lg:justify-start">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <img
                src= "./src/assets/Duol.jpg"
                alt="Duol Puot - Software Developer and Tech Professional"
                className="relative rounded-lg w-full h-auto object-cover shadow-elegant"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 lg:space-y-6 animate-fade-in lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              I'm Duol Puot, a Multi-Talented Tech Professional
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Originally from South Sudan and currently residing in Arba Minch, Ethiopia,
              I am a passionate technology enthusiast with expertise spanning multiple domains
              of the digital world.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              From building robust web applications to creating stunning graphics and securing
              digital infrastructures, I bring a comprehensive skill set to every project.
              My diverse background in psychology combined with my technical education gives
              me a unique perspective on creating user-centered solutions.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 lg:pt-6">
              <Card className="bg-background/50 border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Development</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-secondary/20 hover:border-secondary transition-colors">
                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                  <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Design</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-accent/20 hover:border-accent transition-colors">
                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Security</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-card to-card/50 p-3 md:p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-foreground font-medium text-sm md:text-base">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold mb-2 text-sm md:text-base">Always Learning</p>
              <p className="text-muted-foreground text-sm md:text-base">
                Continuously expanding my skill set and staying up-to-date with the latest
                technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
