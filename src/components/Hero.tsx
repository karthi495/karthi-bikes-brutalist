import { ArrowDown } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center brutalist-noise overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBike}
          alt="Powerful motorcycle"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 brutalist-grid opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Marquee Banner */}
          <div className="overflow-hidden mb-8 border-y-4 border-primary py-3 bg-primary/10">
            <div className="animate-marquee whitespace-nowrap flex">
              <span className="mx-8 text-primary font-bold uppercase tracking-widest">
                ★ NEW ARRIVALS ★ EXCLUSIVE DEALS ★ EASY EMI ★ TRADE-IN AVAILABLE ★ NEW ARRIVALS ★ EXCLUSIVE DEALS ★ EASY EMI ★ TRADE-IN AVAILABLE
              </span>
              <span className="mx-8 text-primary font-bold uppercase tracking-widest">
                ★ NEW ARRIVALS ★ EXCLUSIVE DEALS ★ EASY EMI ★ TRADE-IN AVAILABLE ★ NEW ARRIVALS ★ EXCLUSIVE DEALS ★ EASY EMI ★ TRADE-IN AVAILABLE
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-6">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 font-bold uppercase text-sm tracking-widest mb-4">
              Est. 2010
            </span>
            <h1 className="font-brutalist text-5xl md:text-7xl lg:text-8xl leading-none mb-4">
              <span className="text-foreground">RIDE</span>
              <br />
              <span className="text-stroke">YOUR</span>
              <br />
              <span className="text-primary">LEGEND</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Premium motorcycles. Unbeatable prices. Your trusted showroom for 
            over a decade of two-wheeled excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#bikes"
              className="btn-brutalist bg-primary text-primary-foreground inline-flex items-center justify-center gap-3 glitch-hover"
            >
              Explore Bikes
              <ArrowDown className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="btn-brutalist bg-transparent text-foreground inline-flex items-center justify-center"
            >
              Get Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t-2 border-border">
            <div>
              <div className="font-brutalist text-4xl md:text-5xl text-primary">500+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mt-1">Bikes Sold</div>
            </div>
            <div>
              <div className="font-brutalist text-4xl md:text-5xl text-primary">14</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mt-1">Years Strong</div>
            </div>
            <div>
              <div className="font-brutalist text-4xl md:text-5xl text-primary">50+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mt-1">Models</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
