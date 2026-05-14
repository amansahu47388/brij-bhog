import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageSlider from "@/pages/ImageSlider";
// import ImageSlider from "@/components/ImageSlider";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col pt-16 md:pt-20">
      
      {/* Image Slider */}
      <div className="relative w-full">
        <ImageSlider />

        {/* ✅ Text slider ke upar absolute position mein */}
        <div className="absolute inset-0 z-10 flex items-center bg-black/40">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-xl sm:text-2xl md:text-6xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-up-delay-1">Brij Bhog - Best Caterers in Bhopal</h1>
            <div className="max-w-2xl">
              <span className="inline-block text-yellow-400 font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-up">
                Premium Catering Service
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up-delay-1">
                परंपरा का स्वाद, आधुनिक अंदाज़
              </h2>
              <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-up-delay-2">
                Brijbhog Caterers offers the best caterers in Bhopal with premium catering services in Bhopal. Searching for the best catering services near me ,We deliver delicious food, elegant setups, and unforgettable event experiences.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Book Your Event
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="px-6 py-3 border-2 border-white text-white rounded-full 
                  font-semibold hover:bg-white hover:text-black transition duration-300"
                  asChild
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

