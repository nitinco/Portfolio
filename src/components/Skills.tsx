import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Android Development",
      skills: ["Android Studio", "Java", "React Native"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "Python", "C", "Shell Scripting","Spring boot"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["GitHub", "Firebase", "Xampp", "Qiskit", "TensorFlow Quantum","Postman"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "Operating Systems", "IoT", "AI/ML", "Quantum Computing"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-primary)]"
            >
              <CardHeader>
                <CardTitle className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge 
                      key={skillIdx}
                      variant="secondary"
                      className="bg-secondary/20 hover:bg-secondary/30 text-foreground border border-primary/20"
                    >
                      {skill}
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

export default Skills;
