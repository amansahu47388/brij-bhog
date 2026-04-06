// // // import { Link } from "react-router-dom";
// // // import { ArrowRight } from "lucide-react";
// // // import birthdayImg from "@/assets/birthday-party.jpg";
// // // import weddingImg from "@/assets/wedding-decor.jpg";
// // // import kittyImg from "@/assets/kitty-party.jpg";
// // // import retirementImg from "@/assets/retirement-party.jpg";
// // // import corporateImg from "@/assets/corporate-event.jpg";

// // // const services = [
// // //   { title: "Birthday Decoration", image: birthdayImg, desc: "Vibrant celebrations tailored for all ages" },
// // //   { title: "Wedding Decoration", image: weddingImg, desc: "Elegant setups for your dream wedding" },
// // //   { title: "Kitty Party", image: kittyImg, desc: "Fun-filled gatherings with gourmet menus" },
// // //   { title: "Retirement Party", image: retirementImg, desc: "Honoring milestones with grace and style" },
// // //   { title: "Corporate Events", image: corporateImg, desc: "Professional catering for business occasions" },
// // // ];

// // // const ServicesPreview = () => {
// // //   return (
// // //     <section className="section-padding bg-background">
// // //       <div className="container-wide">
// // //         <div className="text-center mb-14">
// // //           <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
// // //             Our Services
// // //           </span>
// // //           <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
// // //             We Offer Top Notch!
// // //           </h2>
// // //           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
// // //             From decor to dining, every detail is handled with passion and precision.
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {services.map((service, i) => (
// // //             <Link
// // //               key={service.title}
// // //               to="/services"
// // //               className={`group relative overflow-hidden rounded-lg hover-lift ${
// // //                 i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[2/1]" : "aspect-square"
// // //               }`}
// // //             >
// // //               <img
// // //                 src={service.image}
// // //                 alt={service.title}
// // //                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // //                 loading="lazy"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-maroon-dark/20 to-transparent" />
// // //               <div className="absolute bottom-0 left-0 right-0 p-6">
// // //                 <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
// // //                   {service.title}
// // //                 </h3>
// // //                 <p className="text-primary-foreground/70 text-sm mt-1">{service.desc}</p>
// // //                 <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3 group-hover:gap-2 transition-all">
// // //                   Learn More <ArrowRight size={14} />
// // //                 </span>
// // //               </div>
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServicesPreview;

// // import React from "react";

// // const services = [
// //   {
// //     title: "BIRTHDAY DECORATION",
// //     desc: "Birthday Fun & Delicious Dishes: Decor and Food that Sparkle with Joy",
// //     img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
// //   },
// //   {
// //     title: "WEDDING DECORATION",
// //     desc: "Wedding Magic & Tasty Treats: Bringing Decor and Catering Together",
// //     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
// //   },
// //   {
// //     title: "KITTY PARTY",
// //     desc: "Kitty Party Vibes & Yummy Bites: Where Decor and Delicacies Unite",
// //     img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
// //   },
// //   {
// //     title: "RETIREMENT PARTY",
// //     desc: "Retirement Cheers & Flavorful Farewell: Decorating Moments",
// //     img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
// //   },
// // ];

// // const ServicesPreview = () => {
// //   return (
// //     <section
// //       className="py-24 bg-cover bg-center text-white"
// //       style={{
// //         backgroundImage:
// //           "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9')",
// //       }}
// //     >
// //       <div className="bg-black/70 py-20">

// //         {/* HEADING */}

// //         <div className="text-center mb-16">
// //           <p className="text-orange-400 tracking-widest text-sm">
// //             Swastik Cater And Tent Services
// //           </p>

// //           <h2 className="text-4xl font-bold mt-3">
// //             We Offer Top Notch !!
// //           </h2>

// //           <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
// //         </div>

// //         {/* CARDS */}

// //         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

// //           {services.map((item, index) => (
// //             <div
// //               key={index}
// //               className="relative border-2 border-orange-400 p-6 text-center bg-black/40 hover:bg-black/60 transition"
// //             >
// //               <img
// //                 src={item.img}
// //                 className="absolute inset-0 w-full h-full object-cover opacity-30"
// //               />

// //               <div className="relative z-10">

// //                 <h3 className="text-xl font-semibold mb-4">
// //                   {item.title}
// //                 </h3>

// //                 <p className="text-sm text-gray-200 mb-6">
// //                   {item.desc}
// //                 </p>

// //                 <button className="bg-orange-500 px-5 py-2 text-sm tracking-wider hover:bg-orange-600">
// //                   VIEW MENU
// //                 </button>

// //               </div>
// //             </div>
// //           ))}

// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesPreview;
// import React from "react";

// const services = [
//   {
//     title: "WEDDING CATERING",
//     desc: "Delicious wedding menus, elegant buffet setups and professional catering service for your special day.",
//     img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
//   },
//   {
//     title: "BIRTHDAY PARTY CATERING",
//     desc: "Celebrate birthdays with tasty food, creative presentation and customized catering menus.",
//     img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
//   },
//   {
//     title: "RECEPTION CATERING",
//     desc: "Premium reception catering with authentic dishes, live counters and elegant dining experience.",
//     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
//   },
//   {
//     title: "CORPORATE EVENT CATERING",
//     desc: "Professional catering services for meetings, seminars, conferences and corporate celebrations.",
//     img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section
//       className="py-24 bg-cover bg-center text-white"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9')",
//       }}
//     >
//       <div className="bg-black/70 py-20">

//         {/* HEADING */}

//         <div className="text-center mb-16">
//           <p className="text-orange-400 tracking-widest text-sm">
//             Brij Bhog Catering Services
//           </p>

//           <h2 className="text-4xl font-bold mt-3">
//             Our Catering Services
//           </h2>

//           <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
//         </div>

//         {/* CARDS */}

//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="relative border-2 border-orange-400 p-6 text-center bg-black/40 hover:bg-black/60 transition"
//             >
//               <img
//                 src={item.img}
//                 className="absolute inset-0 w-full h-full object-cover opacity-30"
//               />

//               <div className="relative z-10">

//                 <h3 className="text-xl font-semibold mb-4">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-gray-200 mb-6">
//                   {item.desc}
//                 </p>

//                 <button className="bg-orange-500 px-5 py-2 text-sm tracking-wider hover:bg-orange-600">
//                   VIEW DETAILS
//                 </button>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";

const services = [
  {
    title: "WEDDING CATERING",
    desc: "Delicious wedding menus, elegant buffet setups and professional catering service for your special day.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  },
  {
    title: "BIRTHDAY PARTY CATERING",
    desc: "Celebrate birthdays with tasty food, creative presentation and customized catering menus.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  },
  {
    title: "RECEPTION CATERING",
    desc: "Premium reception catering with authentic dishes, live counters and elegant dining experience.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  },
  {
    title: "CORPORATE EVENT CATERING",
    desc: "Professional catering services for meetings, seminars, conferences and corporate celebrations.",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9')",
      }}
    >
      <div className="bg-black/70 py-20">

        {/* HEADING */}

        <div className="text-center mb-16">
          <p className="text-orange-400 tracking-widest text-sm">
            Brij Bhog Catering Services
          </p>

          <h2 className="text-4xl font-bold mt-3">
            We Offer Top Notch !!
          </h2>

          <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        </div>

        {/* CARDS */}

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden border-2 border-orange-400 p-6 text-center bg-black/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
              />

              {/* CONTENT */}
              <div className="relative z-10">

                <h3 className="text-xl font-semibold mb-4 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 mb-6">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button className="bg-orange-500 px-5 py-2 text-sm tracking-wider transition-all duration-300 hover:bg-orange-600 hover:scale-105">
                  VIEW DETAILS
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;