import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-brutalist-dark border-t-4 border-primary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-brutalist text-2xl">K</span>
              </div>
              <div>
                <span className="font-brutalist text-xl text-primary tracking-tight">KARTHI</span>
                <span className="block text-xs text-muted-foreground uppercase tracking-widest">Bike Showroom</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Your trusted destination for premium motorcycles since 2010. 
              Experience excellence in every ride.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-secondary border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-brutalist text-lg text-foreground mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["Home", "Our Bikes", "Offers", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-brutalist text-lg text-foreground mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {["New Bikes", "Used Bikes", "Financing", "Insurance", "Service Center", "Spare Parts"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Karthi Bike Showroom. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
