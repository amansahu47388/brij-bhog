// // import { useParams, useNavigate } from "react-router-dom";

// // const venueData = {
// //   "elegant-green": { title: "Elegant Green", description: "Luxury lawn venue..." },
// //   "samariya-green": { title: "Samariya Green", description: "Traditional venue..." },
// //   "taste-of-temple": { title: "Taste of Temple", description: "Temple-style venue..." },
// // };

// // const VenueDetail = () => {
// //   const { venueSlug } = useParams();
// //   const navigate = useNavigate();
// //   const venue = venueData[venueSlug];

// //   if (!venue) return <div>Venue not found</div>;

// //   return (
// //     <section className="min-h-screen py-20">
// //       <div className="container mx-auto px-4">
// //         <button onClick={() => navigate(-1)} className="mb-8 text-primary">
// //           ← Back
// //         </button>
// //         <h1 className="text-4xl font-bold">{venue.title}</h1>
// //         <p>{venue.description}</p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default VenueDetail;

// import { useParams, useNavigate } from "react-router-dom";

// const venueData = {
//   "elegant-green": {
//     title: "Elegant Green",
//     description:
//       "Elegant Green is a luxurious lawn venue perfect for weddings, receptions and grand celebrations.",
//     location: "Bhopal",
//     capacity: "600 Guests",
//     image:
//       "https://images.unsplash.com/photo-1519741497674-611481863552",
//   },

//   "samariya-green": {
//     title: "Samariya Green",
//     description:
//       "Samariya Green offers a traditional and spacious venue ideal for cultural weddings and events.",
//     location: "Indore",
//     capacity: "500 Guests",
//     image:
//       "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
//   },

//   "taste-of-temple": {
//     title: "Taste of Temple",
//     description:
//       "Taste of Temple provides a divine temple-style venue suitable for spiritual weddings and ceremonies.",
//     location: "Ujjain",
//     capacity: "350 Guests",
//     image:
//       "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
//   },
// };

// const VenueDetail = () => {
//   const { venueSlug } = useParams();
//   const navigate = useNavigate();
//   const venue = venueData[venueSlug];

//   if (!venue)
//     return (
//       <div className="text-center py-40 text-2xl font-semibold">
//         Venue not found
//       </div>
//     );

//   return (
//     <section className="min-h-screen bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-6 text-primary font-medium hover:underline"
//         >
//           ← Back to Venues
//         </button>

//         {/* Image */}
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <img
//             src={venue.image}
//             alt={venue.title}
//             className="w-full h-[400px] object-cover"
//           />
//         </div>

//         {/* Venue Info */}
//         <div className="bg-white rounded-xl shadow-md p-8 mt-8">

//           <h1 className="text-4xl font-bold mb-4">
//             {venue.title}
//           </h1>

//           <p className="text-gray-600 text-lg mb-6">
//             {venue.description}
//           </p>

//           {/* Details */}
//           <div className="grid md:grid-cols-2 gap-6 mb-8">

//             <div className="bg-gray-100 p-4 rounded-lg">
//               <p className="font-semibold">Location</p>
//               <p>{venue.location}</p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg">
//               <p className="font-semibold">Capacity</p>
//               <p>{venue.capacity}</p>
//             </div>

//           </div>

//           {/* Features */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold mb-3">
//               Venue Features
//             </h2>

//             <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
//               <li>✔ Spacious parking</li>
//               <li>✔ Catering service available</li>
//               <li>✔ Decoration support</li>
//               <li>✔ Stage and lighting</li>
//             </ul>
//           </div>

//           {/* Booking Button */}
//           <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition">
//             Book This Venue
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default VenueDetail;

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const venueData = {
  "elegant-green": {
    title: "Elegant Green",
    tagline: "A Perfect Luxury Lawn for Grand Weddings",
    description:
      "Elegant Green is a premium lawn venue designed for luxurious weddings, receptions, and grand celebrations. Surrounded by greenery with modern facilities, it provides a beautiful setting for unforgettable events.",
    location: "Bhopal",
    capacity: "600 Guests",
    parking: "200 Cars",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },

  "samariya-green": {
    title: "Samariya Green",
    tagline: "Traditional Venue for Cultural Celebrations",
    description:
      "Samariya Green is known for its spacious layout and traditional ambiance. Perfect for weddings, family functions and cultural events with elegant decoration possibilities.",
    location: "Indore",
    capacity: "500 Guests",
    parking: "150 Cars",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },

  "taste-of-temple": {
    title: "Taste of Temple",
    tagline: "Divine Venue for Sacred Ceremonies",
    description:
      "Taste of Temple offers a spiritual atmosphere for weddings and religious ceremonies. The architecture and peaceful surroundings make it ideal for traditional celebrations.",
    location: "Ujjain",
    capacity: "350 Guests",
    parking: "120 Cars",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  },
};

const VenueDetail = () => {
  const { venueSlug } = useParams();
  const navigate = useNavigate();
  const venue = venueData[venueSlug];

  if (!venue)
    return (
      <div className="text-center py-40 text-2xl font-semibold">
        Venue Not Found
      </div>
    );

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${venue.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-sm underline"
          >
            ← Back
          </button>

          <h1 className="text-5xl font-bold mb-2">
            {venue.title}
          </h1>

          <p className="text-lg opacity-90">
            {venue.tagline}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Location</p>
            <h3 className="text-xl font-semibold">{venue.location}</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Capacity</p>
            <h3 className="text-xl font-semibold">{venue.capacity}</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Parking</p>
            <h3 className="text-xl font-semibold">{venue.parking}</h3>
          </div>

        </div>

        {/* ABOUT */}
        <div className="bg-white p-10 rounded-xl shadow mb-12">

          <h2 className="text-3xl font-bold mb-4">
            About the Venue
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {venue.description}
          </p>

        </div>

        {/* FEATURES */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            Venue Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <div className="bg-white p-4 rounded-lg shadow">
              ✔ Spacious outdoor lawn
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              ✔ Professional catering services
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              ✔ Premium decoration setup
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              ✔ Lighting & stage arrangement
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              ✔ Guest seating arrangements
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              ✔ Dedicated event management support
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <button className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition shadow-lg">
            Book This Venue
          </button>

        </div>

      </div>
    </div>
  );
};

export default VenueDetail;