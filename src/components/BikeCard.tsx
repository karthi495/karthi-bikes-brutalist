import { ArrowRight } from "lucide-react";

interface BikeCardProps {
  image: string;
  name: string;
  category: string;
  engine: string;
  power: string;
  price: string;
  featured?: boolean;
}

const BikeCard = ({ image, name, category, engine, power, price, featured }: BikeCardProps) => {
  return (
    <div
      className={`group relative bg-card border-4 ${
        featured ? "border-primary" : "border-border"
      } brutalist-hover`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-4 left-4 bg-primary text-primary-foreground px-4 py-1 font-bold uppercase text-xs tracking-widest z-10">
          Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brutalist-dark">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
        {/* Category Tag */}
        <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 border-2 border-foreground">
          <span className="text-xs font-bold uppercase tracking-wider">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-brutalist text-2xl text-foreground mb-4">{name}</h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b-2 border-border">
          <div>
            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Engine</span>
            <span className="font-bold text-foreground">{engine}</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Power</span>
            <span className="font-bold text-foreground">{power}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="block text-xs uppercase tracking-wider text-muted-foreground">Starting at</span>
            <span className="font-brutalist text-2xl text-primary">{price}</span>
          </div>
          <button className="w-12 h-12 bg-primary flex items-center justify-center transition-transform group-hover:-translate-x-1">
            <ArrowRight className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
