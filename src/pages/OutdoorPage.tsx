import React, { useEffect } from "react";

const OutdoorPage = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[420px] flex items-end justify-center text-white text-center pb-20">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            OUTDOOR CATERING
          </h1>

          <p className="mt-4 text-gray-300">
            Home / Outdoor Catering
          </p>
        </div>

      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Outdoor Event Catering
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We provide complete outdoor catering services for garden
            parties, weddings, and large celebrations. Our team manages
            everything from food preparation to serving arrangements.
          </p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Outdoor Catering Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Garden Parties
              </h3>
              <p className="text-gray-600">
                Catering services for garden weddings and outdoor events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Live BBQ & Grill
              </h3>
              <p className="text-gray-600">
                Outdoor BBQ stations and grill counters for guests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Event Setup
              </h3>
              <p className="text-gray-600">
                Complete outdoor dining setup with tents, tables and lighting.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default OutdoorPage;