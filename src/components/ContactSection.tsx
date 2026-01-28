import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your enquiry! We'll contact you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Bike Street, Motor City, TN 600001",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@karthibikes.com",
    },
    {
      icon: Clock,
      label: "Showroom Hours",
      value: "Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary brutalist-noise">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="font-brutalist text-4xl md:text-6xl text-secondary-foreground">
            LET'S<br />
            <span className="text-primary">TALK</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border-4 border-border p-8 md:p-10">
            <h3 className="font-brutalist text-2xl text-card-foreground mb-6">
              ENQUIRY FORM
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-input border-4 border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-input border-4 border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-input border-4 border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-input border-4 border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Tell us which bike you're interested in..."
                />
              </div>
              <button
                type="submit"
                className="btn-brutalist bg-primary text-primary-foreground w-full flex items-center justify-center gap-3"
              >
                Send Enquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-card border-4 border-border p-6 brutalist-hover"
                >
                  <info.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold uppercase text-sm tracking-wider text-muted-foreground mb-2">
                    {info.label}
                  </h4>
                  <p className="text-card-foreground font-medium text-sm">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border-4 border-border aspect-video relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452927093!3d12.95428048041472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704900000000!5m2!1sen!2sin"
                className="w-full h-full grayscale contrast-125 opacity-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
