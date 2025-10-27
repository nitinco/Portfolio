import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* Contact Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-center">Let's Connect!</CardTitle>
            <p className="text-center text-muted-foreground text-sm sm:text-base">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:Nitinjun006@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20"
              >
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <p className="font-medium break-all">Nitinjun006@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:966440502"
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20"
              >
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium break-all">966440502</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-center text-muted-foreground mb-4 text-sm sm:text-base">
                Follow me on social media
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 hover:bg-primary/10 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://github.com/nitinco" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 hover:bg-primary/10 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/nitin-sharma-3bb53a2b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 hover:bg-primary/10 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/ny_t_yn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
