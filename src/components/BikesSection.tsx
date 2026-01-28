import BikeCard from "./BikeCard";
import bikeCruiser from "@/assets/bike-cruiser.jpg";
import bikeSport from "@/assets/bike-sport.jpg";
import bikeAdventure from "@/assets/bike-adventure.jpg";

const bikes = [
  {
    image: bikeSport,
    name: "Thunderbolt RS",
    category: "Sport",
    engine: "998cc",
    power: "150 HP",
    price: "₹12.5L",
    featured: true,
  },
  {
    image: bikeCruiser,
    name: "Shadow Cruiser",
    category: "Cruiser",
    engine: "745cc",
    power: "85 HP",
    price: "₹8.2L",
  },
  {
    image: bikeAdventure,
    name: "Terra Explorer",
    category: "Adventure",
    engine: "1050cc",
    power: "120 HP",
    price: "₹14.8L",
  },
];

const BikesSection = () => {
  return (
    <section id="bikes" className="py-24 bg-background brutalist-noise">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest mb-4">
              Our Collection
            </span>
            <h2 className="font-brutalist text-4xl md:text-6xl text-foreground">
              BEAST<br />
              <span className="text-primary">MACHINES</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            From street dominators to highway cruisers. Find your perfect ride from our curated collection.
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard key={bike.name} {...bike} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="btn-brutalist bg-transparent text-foreground inline-flex items-center gap-3"
          >
            View All Models
            <span className="text-primary">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BikesSection;
