
import React, { useEffect } from "react";

const TastOfTemple = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-white py-10 px-6 md:px-16">

      {/* Title Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          🍽 Brij Bhog Catering – Premium Veg Catering Services in Bhopal
        </h1>

        <p className="text-gray-600">
          Brij Bhog Catering provides delicious and high-quality vegetarian
          catering services for weddings, receptions, corporate events and
          family celebrations in Bhopal. We focus on authentic flavors,
          hygienic preparation and elegant food presentation to create
          memorable dining experiences for every event.
        </p>
      </div>

      {/* Highlights Section */}
      {/* <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4">
          ✨ Our Catering Highlights
        </h2>

        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>100% Pure Vegetarian Menu:</strong> Authentic Indian
            cuisine prepared with fresh ingredients.
          </li>

          <li>
            <strong>Customized Event Menus:</strong> Menus designed according
            to your event type and guest preferences.
          </li>

          <li>
            <strong>Elegant Buffet Setup:</strong> Beautiful buffet counters
            with attractive food presentation.
          </li>

          <li>
            <strong>Live Food Counters:</strong> Chaat, South Indian, Chinese
            and dessert counters for guests.
          </li>

          <li>
            <strong>Professional Catering Staff:</strong> Experienced team
            ensuring smooth service for every event.
          </li>

          <li>
            <strong>Event Catering Services:</strong> Weddings, birthdays,
            receptions, corporate events and family functions.
          </li>
        </ul>
      </div> */}

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">

        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          alt="Catering Food"
          className="rounded-lg shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Buffet Setup"
          className="rounded-lg shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
          alt="Event Catering"
          className="rounded-lg shadow-md"
        />

      </div>


      <div className="max-w-5xl mx-auto mb-12">
  <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border border-amber-100 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
    
    {/* Header with Icon */}
    <div className="flex items-center justify-center mb-8">
      {/* <div className="p-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl shadow-lg mr-4">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2L3 6v10a2 2 0 002 2h10a2 2 0 002-2V6l-7-4z"/>
          <path fillRule="evenodd" d="M3 8v8a1 1 0 001 1h10a1 1 0 001-1V8H3zm7 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg>
      </div> */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent tracking-wide">
          Highlights
        </h2>
        {/* <p className="text-amber-700 font-medium text-sm mt-1">Brij Bhog Special Features</p> */}
      </div>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Feature 1 */}
      <div className="group hover:bg-white/50 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
        <div className="flex items-start space-x-4 mb-3">
          <div className="p-2 bg-green-100 group-hover:bg-green-200 rounded-xl transition-colors">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-700">
            Pure Vegetarian
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Authentic Indian cuisine prepared with fresh ingredients
        </p>
      </div>

      {/* Feature 2 */}
      <div className="group hover:bg-white/50 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
        <div className="flex items-start space-x-4 mb-3">
          <div className="p-2 bg-blue-100 group-hover:bg-blue-200 rounded-xl transition-colors">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-700">
            Customized Menus
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Menus designed according to your event type and preferences
        </p>
      </div>

      {/* Feature 3 */}
      <div className="group hover:bg-white/50 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
        <div className="flex items-start space-x-4 mb-3">
          <div className="p-2 bg-purple-100 group-hover:bg-purple-200 rounded-xl transition-colors">
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-700">
            Elegant Buffet Setup
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Beautiful buffet counters with attractive food presentation
        </p>
      </div>

      {/* Feature 4 */}
      <div className="group hover:bg-white/50 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
        <div className="flex items-start space-x-4 mb-3">
          <div className="p-2 bg-indigo-100 group-hover:bg-indigo-200 rounded-xl transition-colors">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v4a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h1a2 2 0 012 2v2a1 1 0 102 0v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 102 0v-4a1 1 0 00-1-1H3a1 1 0 00-1 1v4a3 3 0 006 0V9a3 3 0 00-3-3H5a3 3 0 00-3 3v4a1 1 0 102 0V9c0-.513.195-1.004.544-1.368l.095-.083a1.5 1.5 0 011.326-.217c.36.137.677.396.893.782l.091.165A1 1 0 006 9v4a1 1 0 102 0V9a3 3 0 00-3-3H3z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-700">
            Live Food Counters
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Chaat, South Indian, Chinese & Dessert counters for guests
        </p>
      </div>

      {/* Feature 5 */}
      <div className="group hover:bg-white/50 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
        <div className="flex items-start space-x-4 mb-3">
          <div className="p-2 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl transition-colors">
            <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-700">
            Professional Staff
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Experienced team ensuring smooth service for every event
        </p>
      </div>

      {/* Feature 6 */}
      <div className="group hover:bg-white/50 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
        <div className="flex items-start space-x-4 mb-3">
          <div className="p-2 bg-rose-100 group-hover:bg-rose-200 rounded-xl transition-colors">
            <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-700">
            All Events Covered
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Weddings, birthdays, corporate events & family functions
        </p>
      </div>

    </div>
  </div>
</div>


{/* 

      <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4">
          ✨ Our Catering Highlights
        </h2>

        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>100% Pure Vegetarian Menu:</strong> Authentic Indian
            cuisine prepared with fresh ingredients.
          </li>

          <li>
            <strong>Customized Event Menus:</strong> Menus designed according
            to your event type and guest preferences.
          </li>

          <li>
            <strong>Elegant Buffet Setup:</strong> Beautiful buffet counters
            with attractive food presentation.
          </li>

          <li>
            <strong>Live Food Counters:</strong> Chaat, South Indian, Chinese
            and dessert counters for guests.
          </li>

          <li>
            <strong>Professional Catering Staff:</strong> Experienced team
            ensuring smooth service for every event.
          </li>

          <li>
            <strong>Event Catering Services:</strong> Weddings, birthdays,
            receptions, corporate events and family functions.
          </li>
        </ul>
      </div> */}


      {/* Why Choose Section */}
      {/* <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3">
          ⭐ Why Choose Brij Bhog Catering?
        </h2>

        <p className="text-gray-600">
          Brij Bhog Catering is known for authentic taste, professional
          service and beautiful food presentation. Whether it’s a wedding,
          birthday party or corporate event, our team ensures every guest
          enjoys a delightful dining experience.
        </p>

        <p className="mt-3 text-gray-600">
          Choose Brij Bhog Catering for delicious food, reliable service
          and memorable celebrations.
        </p>
      </div> */}

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto border rounded-lg p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-3">
          📍 Contact Us
        </h2>

        <p className="text-gray-600 mb-4">
          Bhopal, Madhya Pradesh, India
        </p>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          📞 Book Catering Now : +91 9303099808
        </button>

      </div>

    </div>
  );
};

export default TastOfTemple;