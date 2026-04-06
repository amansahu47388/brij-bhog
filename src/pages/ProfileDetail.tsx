

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const servicesData = {
  "wedding-catering": {
    title: "Wedding Catering",
    desc: "Luxury wedding catering services for your special day.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    features: [
      "Premium Veg & Non-Veg Menu",
      "Live Food Counters",
      "Professional Serving Staff",
      "Custom Wedding Themes"
    ]
  },

  "corporate-events": {
    title: "Corporate Events",
    desc: "Professional catering services for business events.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033",
    features: [
      "Buffet & Plated Service",
      "Corporate Lunch Setup",
      "Quick Service",
      "Healthy Menu Options"
    ]
  },

  "birthday-parties": {
    title: "Birthday Parties",
    desc: "Fun and delicious catering for birthday celebrations.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    features: [
      "Kids Friendly Menu",
      "Cake & Dessert Counter",
      "Theme Decoration",
      "Snacks & Drinks"
    ]
  }
};

const ProfileDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold text-red-500">
          Service Not Found
        </h1>
      </div>
    );
  }
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        {service.title}
      </h1>

      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
      />

      {/* Description */}
      <p className="text-gray-600 text-lg text-center mt-6">
        {service.desc}
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {service.features.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            ✔ {item}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
          Book Catering
        </button>
      </div>

    </div>
  );
};

export default ProfileDetail;