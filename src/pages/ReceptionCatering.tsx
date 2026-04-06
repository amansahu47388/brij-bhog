import React, { useEffect } from "react";

const ReceptionCatering = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[420px] flex items-end justify-center text-white text-center pb-20">

        <img
          src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            RECEPTION CATERING
          </h1>
          <p className="mt-4 text-gray-300">
            Home / Reception Catering
          </p>
        </div>

      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
             Reception Catering
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Make your wedding reception unforgettable with our premium
            catering services. We provide beautifully presented dishes,
            professional staff, and customized menus to delight your guests.
          </p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Reception Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Luxury Buffet
              </h3>
              <p className="text-gray-600">
                Premium buffet arrangements with a wide variety of cuisines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Live Counters
              </h3>
              <p className="text-gray-600">
                Live cooking stations including chaat, pasta, and desserts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Guest Hospitality
              </h3>
              <p className="text-gray-600">
                Professional staff ensuring smooth service for your guests.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ReceptionCatering;