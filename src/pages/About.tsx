

import AboutPreview from "@/components/AboutPreview";
import React, { useEffect } from "react";

const services = [
  "Wedding Catering",
  "Birthday Party Catering",
  "Reception Catering",
  "Housewarming (Griha Pravesh) Catering",
  "Wedding Anniversary Catering"
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="h-[400px] flex items-center justify-center text-white text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="text-5xl font-semibold relative z-10">
          Our Story
        </h1>
      </div>

      {/* OUR STORY - CENTERED & BIG */}
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        
        {/* Subtitle */}
        <p className="text-sm text-orange-500 mb-6 uppercase tracking-wider font-medium">
          Brij Bhog Catering Services
        </p>

        {/* Main Title - BIG & CENTERED */}
        {/* <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent drop-shadow-2xl">
          Our Story
        </h2> */}

        {/* Underline */}
        <div className="w-24 h-[4px] bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-12 rounded-full shadow-lg"></div>

        {/* Content - CENTERED */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-lg px-4">
            Brij Bhog Catering is a trusted catering service in Bhopal
            known for delivering delicious food and exceptional hospitality
            for every celebration. We specialize in providing high-quality
            vegetarian catering services for weddings, family functions,
            corporate gatherings and social events.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-6 px-4">
            Our team focuses on authentic taste, hygienic preparation and
            beautiful food presentation to create a memorable dining
            experience for your guests. Whether it's a small family event
            or a grand wedding celebration, Brij Bhog ensures professional
            service and delightful cuisine.
          </p>
        </div>

      </div>

      {/* SERVICES + IMAGE */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* SERVICES */}
        <div className="space-y-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4 group hover:bg-orange-50 p-4 rounded-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <p className="text-gray-700 text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <img
          src="https://th.bing.com/th/id/OIP.0VSWlBHlUmcCdFDairHxnwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Brij Bhog Catering"
          className="w-full h-[400px] md:h-[450px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      <AboutPreview/>
          </div>

  );
};

export default About;
