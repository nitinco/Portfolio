const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Nitin. Built with React & TypeScript.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Designed with passion and creativity
        </p>
      </div>
    </footer>
  );
};

export default Footer;
