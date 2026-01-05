import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Arts in Psychology",
      institution: "Nile Gambella College",
      status: "Completed",
      icon: GraduationCap,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
    },
    {
      degree: "Software Engineering",
      institution: "Arba Minch University",
      status: "Currently Pursuing",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey combining human behavior understanding with technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`bg-card border-2 ${edu.borderColor} hover:border-opacity-100 transition-all duration-300 hover:scale-105`}
            >
              <CardHeader>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${edu.bgColor} flex items-center justify-center mb-4`}>
                  <edu.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${edu.color}`} />
                </div>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  {edu.degree}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base sm:text-lg">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`inline-block px-4 py-2 rounded-full ${edu.bgColor}`}>
                  <span className={`font-semibold ${edu.color}`}>
                    {edu.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
                A Unique Blend of Skills
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                My background in psychology provides valuable insights into user behavior and 
                experience design, while my ongoing software engineering education equips me 
                with cutting-edge technical skills. This combination allows me to create 
                solutions that are not only technically sound but also deeply user-centered.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
