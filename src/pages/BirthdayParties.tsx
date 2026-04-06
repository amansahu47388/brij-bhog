import React, { useEffect } from "react";

const BirthdayParties = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-end justify-center text-white text-center pb-20">

        <img
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            BIRTHDAY PARTY MANAGEMENT
          </h1>

          <p className="mt-4 text-gray-300">
            Home / Birthday Parties
          </p>
        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Memorable Birthday Celebrations
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We organize fun and memorable birthday parties for kids
            and adults. From theme decoration to catering and
            entertainment, our team takes care of everything to make
            your birthday celebration special.
          </p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Birthday Party Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Theme Decoration
              </h3>
              <p className="text-gray-600">
                Beautiful theme-based decorations to create a fun and
                colorful birthday environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Catering Services
              </h3>
              <p className="text-gray-600">
                Delicious food and snacks for guests including
                birthday cakes and desserts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Entertainment
              </h3>
              <p className="text-gray-600">
                Music, games, performers and activities to make the
                birthday party exciting.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Birthday Party Highlights
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">

          <img
            src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d"
            className="rounded-xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>

      {/* CALLBACK FORM */}
      <section className="bg-black text-white py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Plan Your Birthday Party
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 px-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-transparent border border-gray-500 rounded"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 bg-transparent border border-gray-500 rounded"
          />

          <input
            type="text"
            placeholder="Party Details"
            className="p-3 bg-transparent border border-gray-500 rounded"
          />

        </div>

        <div className="text-center">
          <button className="mt-6 px-8 py-3 bg-purple-600 rounded hover:bg-purple-700 transition">
            Submit
          </button>
        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Birthday Party FAQs
        </h2>

        <div className="space-y-4">

          <details className="border p-4 rounded">
            <summary className="font-semibold">
              Do you organize kids birthday parties?
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, we organize theme-based birthday parties for kids
              with decorations, games and entertainment.
            </p>
          </details>

          <details className="border p-4 rounded">
            <summary className="font-semibold">
              Do you provide catering for birthday parties?
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, we provide complete catering services including
              snacks, meals and cakes.
            </p>
          </details>

        </div>

      </section>

    </div>
  );
};

export default BirthdayParties;