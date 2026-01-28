import { CheckCircle } from "lucide-react";

const features = [
  "Authorized dealer for top motorcycle brands",
  "Certified technicians & service center",
  "Genuine parts & accessories",
  "Customer-first approach since 2010",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background brutalist-noise">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest mb-6">
              Our Story
            </span>
            <h2 className="font-brutalist text-4xl md:text-5xl text-foreground mb-6">
              BUILT ON<br />
              <span className="text-primary">PASSION</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Karthi Bike Showroom has been the region's most trusted motorcycle 
              destination since 2010. What started as a small garage with a dream 
              has grown into a full-scale showroom offering the finest two-wheelers 
              and exceptional service.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment goes beyond selling bikes—we build relationships. 
              Every customer is family, and every ride is a story we're proud to 
              be part of.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-brutalist bg-primary text-primary-foreground inline-flex"
            >
              Visit Showroom
            </a>
          </div>

          {/* Visual Block */}
          <div className="relative">
            {/* Main Block */}
            <div className="bg-secondary border-4 border-border p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border-2 border-border p-6 text-center">
                  <div className="font-brutalist text-5xl text-primary mb-2">14+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Years of Trust</div>
                </div>
                <div className="bg-card border-2 border-border p-6 text-center">
                  <div className="font-brutalist text-5xl text-primary mb-2">5K+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Happy Riders</div>
                </div>
                <div className="bg-card border-2 border-border p-6 text-center">
                  <div className="font-brutalist text-5xl text-primary mb-2">50+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Bike Models</div>
                </div>
                <div className="bg-card border-2 border-border p-6 text-center">
                  <div className="font-brutalist text-5xl text-primary mb-2">4.9</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Google Rating</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary border-4 border-foreground -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-primary -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
