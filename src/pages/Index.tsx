import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BikesSection from "@/components/BikesSection";
import OffersSection from "@/components/OffersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BikesSection />
        <OffersSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
