import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
          <CardContent className="p-8">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I am a passionate web developer and Android developer with a strong foundation in data structures and algorithms (DSA). 
              Currently pursuing my B.Tech in Computer Science and Engineering at Rajasthan Technical University, I'm driven by the desire 
              to solve real-world problems through technology.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              My journey in tech has taken me through exciting internships at prestigious organizations like DRDO, where I worked on 
              cutting-edge quantum computing projects, and various client projects where I've delivered high-quality solutions using 
              modern web technologies.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I am always eager to learn new technologies and improve my skills, striving to deliver innovative and efficient solutions 
              in every project I undertake. Whether it's building responsive web applications with React or developing Android apps, 
              I'm committed to excellence and continuous growth.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
