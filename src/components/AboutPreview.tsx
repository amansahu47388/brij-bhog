import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-us.jpg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Our chefs preparing authentic cuisine"
              className="rounded-lg w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg gold-gradient flex items-center justify-center">
              <div className="text-center text-accent-foreground">
                <span className="font-display text-3xl font-bold block">15+</span>
                <span className="text-xs font-body font-medium">Years of Excellence</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              A Legacy of Flavor & Festivity
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Brij Bhog, we believe every event deserves extraordinary food. With over 15 years of experience, we have perfected the art of catering — blending traditional recipes with modern presentation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our dedicated team of chefs, decorators, and event planners work together to create seamless celebrations that leave lasting impressions.
            </p>
            <Button asChild>
              <Link to="/about">
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
