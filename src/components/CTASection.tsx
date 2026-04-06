import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Ready to Create Something <span className="text-gold-gradient">Unforgettable?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
          Let us bring your vision to life with exceptional catering and event services. Get in touch today.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">
            <Phone className="mr-2 h-5 w-5" />
            Book Your Event Now
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
