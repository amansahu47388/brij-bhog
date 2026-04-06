import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import TasteOfTemple from "./TastOfTemple";
import WhatWeOffer from "@/components/WhatWeOffer";
import Login from "./Login";
import ClientTemplate from "../pages/ClientTemplate";
import ImageSlider from "./ImageSlider";
import { useState } from "react";
import Loader from "./Loader";
const Index = () => {


  const [showVideo, setShowVideo] = useState(true);  // 👈 yeh add karo

  return (
    <>

    {/* Video pehle chalega, khatam hone par gayab */}
      {showVideo && (
        <Loader onComplete={() => setShowVideo(false)} />
      )}
      <Login/>
      <HeroSection />
      {/* <ImageSlider/> */}
      
      <WhatWeOffer/>
      {/* <ServicesPreview /> //top Notched */}
      {/* <AboutPreview /> */}
      <WhyChooseUs />
      <TasteOfTemple/>
      <Testimonials />

      <CTASection />
    </>
  );
};

export default Index;
