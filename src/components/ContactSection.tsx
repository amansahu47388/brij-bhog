import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import FadeIn from "./FadeIn";
// import FadeIn from "./FadeIn ";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="font-body text-primary font-medium tracking-[0.25em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact & <span className="gold-text-gradient">Booking</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ready to start planning? Reach out and let's create something beautiful together.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors" />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors" />

              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors" />

                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors">

                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="reception">Reception</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="outdoor">Outdoor Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your event..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none" />

              <button
                type="submit"
                className="w-full gold-gradient text-secondary font-body font-semibold py-3.5 rounded-sm tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2">

                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="font-body text-muted-foreground">+91 9303099808</p>
                  <p className="font-body text-muted-foreground">
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">info@bhirbhog.com</h4>
                  <p className="font-body text-muted-foreground">info@royalfeast.com</p>
                  <p className="font-body text-muted-foreground">bookings@royalfeast.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1"> MP Nagar Bhopal
                  </h4>
                  <p className="font-body text-muted-foreground">123 Celebration Avenue, Jubilee Hills</p>
                  <p className="font-body text-muted-foreground">Hyderabad, Telangana 500033</p>
                </div>
              </div>

              {/* WhatsApp button */}
              <a href="https://wa.me/919876543210?text=Hi%20RoyalFeast%2C%20I%20would%20like%20to%20discuss%20an%20event." target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-primary-foreground font-body font-semibold px-6 py-3 rounded-sm tracking-wide text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">

                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border mt-4 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8426!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RoyalFeast Location" />

              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

};

export default ContactSection;