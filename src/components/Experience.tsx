import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Abhi Fire Safety Services LLP",
      date: "May 2025",
      description: [
        "Built dynamic UI using React.js + Material-UI, improving performance & responsiveness",
        "Integrated RESTful APIs and conducted unit testing & debugging with Postman and JavaScript",
        "Collaborated with developers to resolve defects and enhance product stability"
      ]
    },
    {
      title: "Research Intern - Quantum ML",
      company: "DRDO (Defence Research & Development Organisation)",
      date: "May 2025",
      description: [
        "Researched and applied quantum algorithms for machine learning tasks to enhance computational efficiency",
        "Developed prototype models combining quantum computing frameworks with classical ML techniques",
        "Implemented quantum ML algorithms using Qiskit and TensorFlow Quantum"
      ]
    },
    {
      title: "Research Intern - Quantum Computing",
      company: "DRDO (Defence Research & Development Organisation)",
      date: "May 2024",
      description: [
        "Learned fundamentals of quantum computing and quantum algorithms",
        "Worked with Qiskit, Python, and related quantum computing libraries",
        "Implemented Shor's algorithm for integer factorization"
      ]
    },
    {
      title: "Web Development & Digital Marketing Intern",
      company: "Birla Institute of Scientific Research",
      date: "July 2022",
      description: [
        "45-day comprehensive training in Web Development and Digital Marketing",
        "Learned HTML, CSS, JavaScript, and web development fundamentals",
        "Introduction to Android Development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card 
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-secondary)]"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">{exp.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
