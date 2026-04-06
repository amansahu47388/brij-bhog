import React from "react";

const MenuPlanning = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          alt="menu planning"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Menu Planning
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            We create customized menus that perfectly match your event,
            guest preferences, and theme.
          </p>
        </div>
      </section>

      {/* ABOUT MENU PLANNING */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="food menu"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Perfect Menu For Every Event
          </h2>

          <p className="text-gray-600 mb-6">
            Our expert chefs design menus that suit every occasion, from
            weddings and corporate events to private celebrations.
            We carefully select dishes to match your event theme,
            guest preferences, and dietary requirements.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Custom menu based on event type</li>
            <li>✔ Veg & Non-Veg options available</li>
            <li>✔ Seasonal and fresh ingredients</li>
            <li>✔ Special diet menus (Vegan / Gluten Free)</li>
            <li>✔ International & Indian cuisine options</li>
          </ul>
        </div>

      </section>

      {/* MENU SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Menu Planning Services
            </h2>
            <p className="text-gray-600 mt-3">
              We design menus that suit every type of event and celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Wedding Menu Planning",
              "Corporate Event Menus",
              "Birthday Party Menus",
              "Buffet Menu Design",
              "Live Food Counters",
              "Customized Theme Menus",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Plan Your Perfect Menu Today
        </h2>

        <p className="text-gray-600 mb-6">
          Let our experts design a menu that makes your event unforgettable.
        </p>

        <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600">
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default MenuPlanning;