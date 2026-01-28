import { Percent, CreditCard, RefreshCw, Shield } from "lucide-react";

const offers = [
  {
    icon: Percent,
    title: "0% Down Payment",
    description: "Drive home your dream bike with zero upfront cost on select models.",
    highlight: "Limited Time",
  },
  {
    icon: CreditCard,
    title: "Easy EMI Plans",
    description: "Flexible financing starting at just ₹3,999/month. Quick approval.",
    highlight: "Low Interest",
  },
  {
    icon: RefreshCw,
    title: "Exchange Bonus",
    description: "Get up to ₹50,000 extra on your old bike exchange.",
    highlight: "Best Value",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Extended protection plan covering all major components.",
    highlight: "Peace of Mind",
  },
];

const OffersSection = () => {
  return (
    <section id="offers" className="py-24 bg-secondary brutalist-stripes relative">
      <div className="absolute inset-0 bg-secondary/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest mb-4">
            Exclusive Deals
          </span>
          <h2 className="font-brutalist text-4xl md:text-6xl text-secondary-foreground mb-6">
            UNBEATABLE<br />
            <span className="text-stroke-thin">OFFERS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your journey to ownership made easier. Take advantage of our special financing options.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-card border-4 border-border p-8 brutalist-hover group"
            >
              {/* Highlight Badge */}
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 font-bold uppercase text-xs tracking-wider mb-6">
                {offer.highlight}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary mb-6 flex items-center justify-center transition-transform group-hover:rotate-6">
                <offer.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-brutalist text-xl text-card-foreground mb-3">
                {offer.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary border-4 border-foreground p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-brutalist text-2xl md:text-3xl text-primary-foreground mb-2">
              READY TO RIDE?
            </h3>
            <p className="text-primary-foreground/80">
              Calculate your EMI now and get pre-approved in minutes.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-brutalist bg-background text-foreground whitespace-nowrap"
          >
            Calculate EMI
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
