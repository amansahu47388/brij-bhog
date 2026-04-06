


import React, { useEffect } from "react";

const WeddingEvents = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="bg-[#f8f6f3] py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* SECTION 1 */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl font-serif mb-6 text-gray-800">
              Wedding Catering in Bhopal – Brij Bhog Catering
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              A wedding is one of the most special celebrations in life.
              At Brij Bhog Catering, we bring authentic flavors,
              elegant presentation and professional hospitality
              to make your wedding truly unforgettable.
            </p>

            <h2 className="text-2xl font-serif mb-4 text-gray-800">
              Delicious Wedding Feast for Your Guests
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Food is the heart of every Indian wedding. Our experienced
              chefs prepare a wide variety of delicious dishes including
              traditional Indian cuisine, live counters and modern fusion
              menus that delight every guest.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
            className="w-full h-[420px] object-cover"
          />

        </div>


        {/* SECTION 2 */}

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">

          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            className="w-full h-[420px] object-cover"
          />

          <div>

            <h2 className="text-2xl font-serif mb-4 text-gray-800">
              Elegant Food Presentation & Buffet Setup
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our catering team focuses on beautiful buffet setups,
              attractive food presentation and hygienic preparation
              to create a premium dining experience for your guests.
            </p>

            <h2 className="text-2xl font-serif mb-4 text-gray-800">
              Complete Wedding Catering Services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              With years of experience in wedding catering, Brij Bhog
              provides complete catering services including menu planning,
              buffet arrangements, live food counters and professional
              service staff for smooth event execution.
            </p>

          </div>

        </div>


        {/* PACKAGE INCLUDES */}

        <div className="mt-20">

          <h2 className="text-2xl font-serif mb-6 text-gray-800">
            Our Catering Services Include
          </h2>

          <ul className="space-y-3 text-gray-600">

            <li>✓ Customized Wedding Menu Planning</li>

            <li>✓ Premium Buffet & Live Food Counters</li>

            <li>✓ Professional Service Staff</li>

            <li>✓ Elegant Food Presentation & Setup</li>

            <li>✓ Hygienic Food Preparation</li>

          </ul>

        </div>


        {/* AREAS WE SERVE */}

        <div className="mt-20">

          <h2 className="text-2xl font-serif mb-6 text-gray-800">
            Areas We Serve
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Brij Bhog Catering proudly serves wedding catering services
            across Bhopal and nearby areas. Whether your event is held
            at a banquet hall, garden, farmhouse or hotel, our team
            ensures delicious food and professional hospitality
            for every celebration.
          </p>

          <p className="text-gray-600 mt-4">
            👉 Celebrate your wedding with Brij Bhog Catering —
            where authentic taste meets exceptional service.
          </p>

        </div>

      </div>

    </div>
  );
};

export default WeddingEvents;