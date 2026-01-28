import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#bikes", label: "Bikes" },
    { href: "#offers", label: "Offers" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-brutalist text-2xl">K</span>
            </div>
            <div>
              <span className="font-brutalist text-xl text-primary tracking-tight">KARTHI</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-widest">Bike Showroom</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold uppercase text-sm tracking-wider text-foreground hover:text-primary transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-150 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="btn-brutalist bg-primary text-primary-foreground text-sm py-3 px-6"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 border-2 border-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t-2 border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-bold uppercase text-lg tracking-wider text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-brutalist bg-primary text-primary-foreground text-center mt-4"
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
