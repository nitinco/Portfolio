import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Rajasthan Technical University",
      location: "Kota, Rajasthan",
      date: "2023 - 2026 (Present)",
      cgpa: "7.71",
      skills: ["DSA", "Operating Systems", "IoT", "AI", "Computing"],
      languages: ["Python", "Java", "C++", "Shell Scripting"]
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Govt. Ram Chandra Khaithan Polytechnic College",
      location: "Jaipur",
      date: "August 2020 - June 2023",
      cgpa: "9.11",
      skills: ["DSA", "IT", "OS", "Web Technologies"],
      languages: ["C", "Python"]
    }
  ];

  const certifications = [
    "AI/ML for Geodata Analysis - ISRO (Aug 2024)",
    "How to Earn Through Social Media - CETPA (Oct 2023)",
    "Deploy Your Own Website in 2 Days - CEPTA (Nov 2023)",
    "Cyber Threats & Preventions - CEPTA (Nov 2023)",
    "Python for Beginners - ALISON (Jun 2022)"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Education & Certifications
        </h2>
        
        {/* Education */}
        <div className="mb-12 space-y-6">
          {education.map((edu, idx) => (
            <Card 
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                    <CardDescription className="text-primary font-medium">{edu.institution}</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                    <p className="text-sm text-muted-foreground">{edu.date}</p>
                    <p className="text-lg font-semibold text-foreground mt-2">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Skills Acquired:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx}
                          variant="secondary"
                          className="bg-secondary/20 text-foreground border border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.languages.map((lang, langIdx) => (
                        <Badge 
                          key={langIdx}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20"
                        >
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
