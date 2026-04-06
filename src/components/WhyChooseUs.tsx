


import React from "react";
import ClientTemplate from "../pages/ClientTemplate";

const featuresLeft = [
  {
    title: "AUTHENTIC INDIAN FLAVORS",
    desc: "At Brij Bhog, we serve delicious traditional Indian dishes prepared by experienced chefs using fresh ingredients and authentic recipes.",
  },
  {
    title: "CUSTOMIZED CATERING MENUS",
    desc: "We design catering menus according to your event type, guest preferences, and budget to make every celebration special.",
  },
  {
    title: "QUALITY & HYGIENE",
    desc: "Food safety and hygiene are our top priorities. Every dish is prepared with strict quality standards and cleanliness.",
  },
];

const featuresRight = [
  {
    title: "EXPERIENCED CATERING TEAM",
    desc: "Our professional catering team ensures smooth service and timely food delivery at every event.",
  },
  {
    title: "PERFECT FOR EVERY OCCASION",
    desc: "From weddings and receptions to corporate events and birthday parties, Brij Bhog provides catering for all occasions.",
  },
  {
    title: "MEMORABLE DINING EXPERIENCE",
    desc: "We focus on presentation and taste to create a memorable dining experience for you and your guests.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#faf7f2] py-16 md:py-20 px-5 md:px-8">
      
      {/* Heading - ZERO GAP */}
      <div className="text-center max-w-3xl mx-auto mb-0 md:mb-2">
        <p className="text-gray-500 italic mb-1 text-sm md:text-base">
          Premium Catering Services
        </p>
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-2">
          WHY CHOOSE BRIJ BHOG?
        </h2>
      </div>

      {/* Main Layout - NO GAP */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-0">
        
        {/* LEFT FEATURES */}
        <div className="space-y-8 md:space-y-10">
          {featuresLeft.map((item, index) => (
            <div key={index} className="text-center md:text-right">
              <h3 className="font-semibold tracking-wide text-base md:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER COMPONENT */}
        <div className="flex justify-center">
          <ClientTemplate />
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-8 md:space-y-10">
          {featuresRight.map((item, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="font-semibold tracking-wide text-base md:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
