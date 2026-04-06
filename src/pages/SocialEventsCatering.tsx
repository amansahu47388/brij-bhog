// // // // import React from "react";

// // // // const SocialEventsCatering = () => {
// // // //   return (
// // // //     <div className="w-full">

// // // //       {/* HERO SECTION */}
// // // //       <section className="relative h-[420px] flex items-center justify-center text-white">
// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1519455953755-9d11a8e6d17d"
// // // //           alt="Social Events Catering"
// // // //           className="absolute w-full h-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 via-black/60 to-amber-900/70"></div>
        
// // // //         <div className="relative text-center px-4 z-10">
// // // //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif drop-shadow-2xl">
// // // //             Social Events
// // // //           </h1>
// // // //           <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
// // // //             Perfect catering for birthdays, anniversaries, housewarmings & celebrations
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* ABOUT SOCIAL EVENTS */}
// // // //       <section className="py-24 max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
// // // //         <div className="order-2 md:order-1">
// // // //           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-800 leading-tight">
// // // //             Celebration-Ready <span className="text-orange-600">Catering</span>
// // // //           </h2>
          
// // // //           <p className="text-xl text-gray-600 mb-8 leading-relaxed">
// // // //             From intimate family gatherings to grand social celebrations, our 
// // // //             vegetarian menus bring people together with authentic flavors and 
// // // //             memorable presentation.
// // // //           </p>

// // // //           <div className="grid md:grid-cols-2 gap-6 mb-8">
// // // //             {[
// // // //               "Birthday Parties",
// // // //               "Wedding Anniversaries", 
// // // //               "Housewarming (Griha Pravesh)",
// // // //               "Baby Showers",
// // // //               "Engagement Parties",
// // // //               "Family Reunions"
// // // //             ].map((item, index) => (
// // // //               <div key={index} className="group flex items-center gap-4 p-4 bg-orange-50/50 rounded-xl hover:bg-orange-100 transition-all duration-300">
// // // //                 <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
// // // //                   {index + 1}
// // // //                 </div>
// // // //                 <span className="font-semibold text-gray-800">{item}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1551028719-00167b16eac5"
// // // //           alt="Social Events Catering"
// // // //           className="w-full h-[450px] md:h-[550px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
// // // //         />
// // // //       </section>

// // // //       {/* SOCIAL EVENT PACKAGES */}
// // // //       <section className="bg-gradient-to-b from-orange-50 to-amber-50 py-24">
// // // //         <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
// // // //           <div className="text-center mb-20">
// // // //             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-orange-700 via-amber-700 to-orange-800 bg-clip-text text-transparent">
// // // //               Our Social Event Packages
// // // //             </h2>
// // // //             <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
// // // //               Choose from our specially curated packages designed for every celebration
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             {[
// // // //               {
// // // //                 title: "Birthday Bliss",
// // // //                 desc: "Perfect for kids & adults • Live chaat counter • Cake setup • 25+ dishes",
// // // //                 price: "Starting ₹350/plate"
// // // //               },
// // // //               {
// // // //                 title: "Anniversary Royale", 
// // // //                 desc: "Romantic dinner setup • Premium desserts • Welcome drinks • 30+ dishes",
// // // //                 price: "Starting ₹450/plate"
// // // //               },
// // // //               {
// // // //                 title: "Griha Pravesh Special",
// // // //                 desc: "Traditional puja thali • Festive sweets • Regional specialties • 28+ dishes",
// // // //                 price: "Starting ₹300/plate"
// // // //               },
// // // //               {
// // // //                 title: "Milestone Celebrations",
// // // //                 desc: "Grand buffet • Live counters • Themed decor • Unlimited 40+ dishes",
// // // //                 price: "Starting ₹500/plate"
// // // //               },
// // // //               {
// // // //                 title: "Family Gathering",
// // // //                 desc: "Home-style cooking • Regional favorites • Kids menu • 22+ dishes",
// // // //                 price: "Starting ₹280/plate"
// // // //               },
// // // //               {
// // // //                 title: "Engagement Party",
// // // //                 desc: "Fusion menu • Welcome cocktails • Live stations • 35+ dishes",
// // // //                 price: "Starting ₹420/plate"
// // // //               }
// // // //             ].map((pkg, index) => (
// // // //               <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-orange-100 group">
// // // //                 <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
// // // //                   {index + 1}
// // // //                 </div>
// // // //                 <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center font-serif">{pkg.title}</h3>
// // // //                 <p className="text-gray-600 mb-6 text-center leading-relaxed">{pkg.desc}</p>
// // // //                 <div className="text-center">
// // // //                   <div className="text-3xl font-bold text-orange-600 mb-2">{pkg.price}</div>
// // // //                   <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
// // // //                     Choose Package
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CTA */}
// // // //       <section className="py-24 text-center bg-gradient-to-r from-orange-600 to-amber-600 text-white">
// // // //         <div className="max-w-4xl mx-auto px-6">
// // // //           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
// // // //             Ready to Celebrate?
// // // //           </h2>
// // // //           <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
// // // //             Let us create a memorable dining experience for your social event
// // // //           </p>
// // // //           <button className="bg-white text-orange-600 px-12 py-5 rounded-3xl text-xl font-bold hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
// // // //             Book Your Event Now
// // // //           </button>
// // // //         </div>
// // // //       </section>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default SocialEventsCatering;


// // // import React, { useEffect } from "react";

// // // const SocialEventsCatering = () => {

// // //     useEffect(() => {
// // //         window.scrollTo(0, 0);
// // //       }, []);
// // //   return (
// // //     <div className="w-full">

// // //       {/* HERO SECTION - BRIJ BHOG BRANDING */}
// // //       <section className="relative h-[420px] md:h-[500px] flex items-center justify-center text-white">
// // //         <img
// // //           src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
// // //           alt="Brij Bhog Social Events"
// // //           className="absolute w-full h-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-black/70 to-amber-900/80"></div>
        
// // //         <div className="relative text-center px-4 z-10 max-w-4xl mx-auto">
// // //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif drop-shadow-2xl tracking-wide">
// // //             Social Events
// // //           </h1>
// // //           <p className="max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
// // //             Bhopal's Most Trusted Pure Vegetarian Catering
// // //           </p>
// // //           <p className="text-lg md:text-xl mt-4 opacity-90 font-medium">
// // //             Birthdays • Anniversaries • Housewarming • All Social Events
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ABOUT BRIJ BHOG SOCIAL EVENTS */}
// // //       <section className="py-24 max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center bg-gradient-to-br from-orange-50/50 to-amber-50/30">
        
// // //         <img
// // //           src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
// // //           alt="Brij Bhog Social Events"
// // //           className="w-full h-[450px] md:h-[550px] lg:h-[600px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
// // //         />

// // //         <div className="md:order-2">
// // //           <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-6">
// // //             Bhopal Catering Services
// // //           </span>
          
// // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-gray-800 leading-tight">
// // //             Make Every Celebration <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Memorable</span>
// // //           </h2>
          
// // //           <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-light">
// // //             Brij Bhog brings pure vegetarian catering excellence to every social event in Bhopal. 
// // //             Our specialty is creating unforgettable food experiences.
// // //           </p>

// // //           <div className="grid md:grid-cols-2 gap-6">
// // //             {[
// // //               "Birthday Parties",
// // //               "Wedding Anniversaries", 
// // //               "Housewarming (Griha Pravesh)",
// // //               "Baby Showers",
// // //               "Engagement Parties",
// // //               "Family Reunions"
// // //             ].map((item, index) => (
// // //               <div key={index} className="group flex items-center gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl hover:bg-orange-50 hover:shadow-xl transition-all duration-500 border border-orange-100/50 hover:border-orange-200">
// // //                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
// // //                   {index + 1}
// // //                 </div>
// // //                 <span className="font-semibold text-gray-800 text-lg">{item}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* BRIJ BHOG SOCIAL PACKAGES */}
// // //       {/* <section className="py-24 px-6 lg:px-12">
// // //         <div className="max-w-7xl mx-auto">
          
// // //           <div className="text-center mb-20">
// // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-orange-700 via-amber-700 to-orange-800 bg-clip-text text-transparent drop-shadow-xl">
// // //               Our Social Event Packages
// // //             </h2>
// // //             <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
// // //               Specially curated packages for every celebration - 100% Pure Vegetarian
// // //             </p>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
// // //             {[
// // //               {
// // //                 title: "Birthday Bliss",
// // //                 desc: "Perfect for kids & adults • Live chaat counter • Cake setup • 25+ dishes",
// // //                 price: "Starting ₹350/plate"
// // //               },
// // //               {
// // //                 title: "Anniversary Royale", 
// // //                 desc: "Romantic dinner setup • Premium desserts • Welcome drinks • 30+ dishes",
// // //                 price: "Starting ₹450/plate"
// // //               },
// // //               {
// // //                 title: "Griha Pravesh Special",
// // //                 desc: "Traditional puja thali • Festive sweets • Regional specialties • 28+ dishes",
// // //                 price: "Starting ₹300/plate"
// // //               },
// // //               {
// // //                 title: "Milestone Celebrations",
// // //                 desc: "Grand buffet • Live counters • Themed decor • Unlimited 40+ dishes",
// // //                 price: "Starting ₹500/plate"
// // //               },
// // //               {
// // //                 title: "Family Gathering",
// // //                 desc: "Home-style cooking • Regional favorites • Kids menu • 22+ dishes",
// // //                 price: "Starting ₹280/plate"
// // //               },
// // //               {
// // //                 title: "Engagement Party",
// // //                 desc: "Fusion menu • Welcome cocktails • Live stations • 35+ dishes",
// // //                 price: "Starting ₹420/plate"
// // //               }
// // //             ].map((pkg, index) => (
// // //               <div key={index} className="bg-gradient-to-br from-white to-orange-50/50 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 border border-orange-100/50 group cursor-pointer">
// // //                 <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-8 shadow-2xl group-hover:scale-125 transition-all duration-500 flex-shrink-0">
// // //                   {index + 1}
// // //                 </div>
// // //                 <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center font-serif leading-tight">{pkg.title}</h3>
// // //                 <p className="text-gray-600 mb-8 text-center leading-relaxed text-lg px-2">{pkg.desc}</p>
// // //                 <div className="text-center">
// // //                   <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
// // //                     {pkg.price}
// // //                   </div>
// // //                   <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 lg:px-12 lg:py-5 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-400 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 w-full group-hover:bg-orange-600">
// // //                     Choose Package
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section> */}

// // //       {/* CTA - BRIJ BHOG BRANDING */}
// // //       <section className="py-28 text-center bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
// // //         <div className="absolute inset-0 bg-black/20"></div>
// // //         <div className="relative max-w-5xl mx-auto px-6 z-10">
// // //           <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 drop-shadow-2xl">
// // //             Ready to Celebrate?
// // //           </h2>
// // //           <p className="text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed font-light max-w-3xl mx-auto">
// // //             Brij Bhog - Bhopal's Most Trusted Vegetarian Catering for Your Special Event
// // //           </p>
// // //           <button className="bg-white text-orange-600 px-16 py-6 lg:px-20 lg:py-7 rounded-3xl text-2xl font-bold hover:bg-orange-50 hover:text-orange-700 transition-all duration-500 shadow-2xl hover:shadow-4xl transform hover:-translate-y-3 relative z-20">
// // //             Book Your Event Now
// // //           </button>
// // //         </div>
// // //       </section>

// // //     </div>
// // //   );
// // // };  

// // // export default SocialEventsCatering;

// // import React, { useEffect } from "react";

// // const SocialEventsCatering = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   return (
// //     <div className="w-full">
// //       {/* HERO SECTION */}
// //       <section className="relative h-[420px] md:h-[500px] flex items-center justify-center text-white">
// //         <img
// //           src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
// //           alt="Brij Bhog Social Events"
// //           className="absolute w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-black/70 to-amber-900/80"></div>
        
// //         <div className="relative text-center px-4 z-10 max-w-4xl mx-auto">
// //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 font-serif drop-shadow-2xl tracking-widest bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent animate-pulse">
// //             Social Events
// //           </h1>
// //           <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl font-light leading-tight font-serif italic drop-shadow-lg">
// //             Bhopal's Most Trusted Pure Vegetarian Catering
// //           </p>
// //           <p className="text-base md:text-lg mt-3 opacity-90 font-medium tracking-wide drop-shadow-md">
// //             Birthdays • Anniversaries • Housewarming • Celebrations
// //           </p>
// //         </div>
// //       </section>

// //       {/* ABOUT SECTION */}
// //       <section className="py-20 max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center bg-gradient-to-br from-orange-50/50 to-amber-50/30">
        
// //         <img
// //           src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
// //           alt="Brij Bhog Social Events"
// //           className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
// //         />

// //         <div className="md:order-2">
// //           <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-700 text-xs font-bold rounded-full mb-6 backdrop-blur-sm border border-orange-200 tracking-wider">
// //             🍽️ Bhopal Catering
// //           </span>
          
// //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-6 text-gray-800 leading-tight bg-gradient-to-r from-gray-800 via-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-xl">
// //             Make Every Celebration <span className="block"> Memorable </span>
// //           </h2>
          
// //           <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light max-w-lg">
// //             Brij Bhog brings pure vegetarian excellence to every social event in Bhopal.
// //           </p>

// //           <div className="grid md:grid-cols-2 gap-4">
// //             {[
// //               " Birthday Parties",
// //               " Wedding Anniversaries", 
// //               " Housewarming",
// //               " Baby Showers",
// //               " Engagement Parties",
// //               " Family Reunions"
// //             ].map((item, index) => (
// //               <div key={index} className="group flex items-center gap-3 p-5 bg-white/80 backdrop-blur-md rounded-2xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:shadow-2xl transition-all duration-500 border border-orange-100/50 hover:border-orange-300 hover:scale-[1.02]">
// //                 <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
// //                   {index + 1}
// //                 </div>
// //                 <span className="font-bold text-gray-800 text-base group-hover:text-orange-600 transition-colors">{item}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-24 text-center bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
// //         <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
// //         <div className="relative max-w-4xl mx-auto px-6 z-10">
// //           <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black mb-6 drop-shadow-2xl tracking-widest bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
// //             Ready to Celebrate?
// //           </h2>
// //           <p className="text-xl md:text-2xl mb-10 opacity-95 leading-tight font-light font-serif italic max-w-2xl mx-auto drop-shadow-lg">
// //             Brij Bhog - Bhopal's Most Trusted Vegetarian Catering
// //           </p>
// //           <button className="bg-white/90 text-orange-600 px-14 py-5 lg:px-18 lg:py-6 rounded-3xl text-xl font-black hover:bg-orange-50 hover:text-orange-700 transition-all duration-500 shadow-2xl hover:shadow-4xl transform hover:-translate-y-3 hover:scale-105 backdrop-blur-xl relative z-20 border-2 border-white/30">
// //              Book Your Event Now
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default SocialEventsCatering;

// import React, { useEffect } from "react";

// const SocialEventsCatering = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="w-full">
//       {/* HERO SECTION */}
//       <section className="relative h-[420px] md:h-[500px] flex items-center justify-center text-white">
//         <img
//           src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
//           alt="Brij Bhog Social Events"
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 via-black/70 to-amber-900/80"></div>
        
//         <div className="relative text-center px-4 z-10 max-w-4xl mx-auto">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 font-serif drop-shadow-2xl tracking-widest bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent animate-pulse">
//             Social Events
//           </h1>
//           <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl font-light leading-tight font-serif italic drop-shadow-lg">
//             Bhopal's Most Trusted Pure Vegetarian Catering
//           </p>
//           <p className="text-base md:text-lg mt-3 opacity-90 font-medium tracking-wide drop-shadow-md">
//             Birthdays • Anniversaries • Housewarming • Celebrations
//           </p>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="py-20 max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center bg-gradient-to-br from-amber-50/70 to-brown-50/50">
        
//         <img
//           src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
//           alt="Brij Bhog Social Events"
//           className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
//         />

//         <div className="md:order-2">
//           <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-brown-500/20 to-amber-500/20 text-brown-700 text-xs font-bold rounded-full mb-6 backdrop-blur-sm border border-brown-200 tracking-wider">
//             🍽️ Bhopal Catering
//           </span>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-6 text-gray-800 leading-tight bg-gradient-to-r from-gray-800 via-brown-600 to-amber-600 bg-clip-text text-transparent drop-shadow-xl">
//             Make Every Celebration <span className="block">Memorable</span>
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light max-w-lg">
//             Brij Bhog brings pure vegetarian excellence to every social event in Bhopal.
//           </p>

//           {/* TOPICS CARDS */}
//           <div className="grid md:grid-cols-2 gap-4 mb-8">
//             {[
//               { icon: "🎂", title: "Birthday Parties", color: "from-pink-500 to-rose-500" },
//               { icon: "💍", title: "Wedding Anniversaries", color: "from-yellow-500 to-amber-500" },
//               { icon: "🏠", title: "Housewarming", color: "from-green-500 to-emerald-500" },
//               { icon: "👶", title: "Baby Showers", color: "from-blue-500 to-indigo-500" },
//               { icon: "💒", title: "Engagement Parties", color: "from-purple-500 to-violet-500" },
//               { icon: "👨‍👩‍👧‍👦", title: "Family Reunions", color: "from-orange-500 to-brown-500" }
//             ].map((item, index) => (
//               <div key={index} className="group relative bg-white/90 backdrop-blur-xl p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brown-100/50 hover:border-brown-300 shadow-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-amber-50 overflow-hidden">
//                 {/* Card Number Badge */}
//                 <div className={`absolute -top-3 -right-3 w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-all duration-300 z-10`}>
//                   {index + 1}
//                 </div>
                
//                 {/* Card Icon */}
//                 <div className="w-14 h-14 bg-gradient-to-br from-white/50 to-transparent rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-all duration-300">
//                   <span className="text-2xl">{item.icon}</span>
//                 </div>
                
//                 {/* Card Title */}
//                 <h3 className="font-bold text-xl text-gray-800 mb-3 leading-tight group-hover:text-brown-700 transition-colors line-clamp-2">
//                   {item.title}
//                 </h3>
                
//                 {/* Card Hover Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-brown-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 text-center bg-gradient-to-r from-brown-600 via-amber-600 to-brown-700 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
//         <div className="relative max-w-4xl mx-auto px-6 z-10">
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black mb-6 drop-shadow-2xl tracking-widest bg-gradient-to-r from-white via-amber-100 to-brown-200 bg-clip-text text-transparent">
//             Ready to Celebrate?
//           </h2>
//           <p className="text-xl md:text-2xl mb-10 opacity-95 leading-tight font-light font-serif italic max-w-2xl mx-auto drop-shadow-lg">
//             Brij Bhog - Bhopal's Most Trusted Vegetarian Catering
//           </p>
//           <button className="bg-white/90 text-brown-600 px-14 py-5 lg:px-18 lg:py-6 rounded-3xl text-xl font-black hover:bg-brown-50 hover:text-brown-700 transition-all duration-500 shadow-2xl hover:shadow-4xl transform hover:-translate-y-3 hover:scale-105 backdrop-blur-xl relative z-20 border-2 border-white/30">
//             Book Your Event Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SocialEventsCatering;
import React, { useEffect } from "react";

const SocialEventsCatering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[420px] md:h-[500px] flex items-center justify-center text-white">
        <img
          src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
          alt="Brij Bhog Social Events"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-black/70 to-orange-900/80"></div>
        
        <div className="relative text-center px-4 z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 font-serif drop-shadow-2xl tracking-widest text-white">
            Social Events
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl font-light leading-tight font-serif italic drop-shadow-lg text-white">
            Bhopal's Most Trusted Pure Vegetarian Catering
          </p>
          <p className="text-base md:text-lg mt-3 opacity-90 font-medium tracking-wide drop-shadow-md text-white">
            Birthdays • Anniversaries • Housewarming • Celebrations
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center bg-gradient-to-br from-amber-50/70 to-orange-50/50">
        
        <img
          src="https://www.hire4event.com/blogs/wp-content/uploads/2020/02/best-catering-service-for-corporate-events-1536x1000.jpg"
          alt="Brij Bhog Social Events"
          className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
        />

        <div className="md:order-2">
          {/* <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-800 text-xs font-bold rounded-full mb-6 backdrop-blur-sm border border-amber-200 tracking-wider">
            🍽️ Bhopal Catering
          </span> */}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-6 text-gray-900 leading-tight">
            Make Every Celebration <span className="block text-amber-700 font-black">Memorable</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light max-w-lg">
            Brij Bhog brings pure vegetarian excellence to every social event in Bhopal.
          </p>

          {/* TOPICS CARDS - FIXED */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {  title: "Birthday Parties", color: "from-pink-500 to-rose-500" },
              {  title: "Wedding Anniversaries", color: "from-yellow-500 to-amber-500" },
              {  title: "Housewarming", color: "from-green-500 to-emerald-500" },
              {  title: "Baby Showers", color: "from-blue-500 to-indigo-500" },
              { title: "Engagement Parties", color: "from-purple-500 to-violet-500" },
              {  title: "Family Reunions", color: "from-orange-500 to-orange-600" }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white/95 backdrop-blur-xl p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 hover:border-amber-300 shadow-xl hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 overflow-hidden">
                {/* Card Number Badge */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-all duration-300 z-10`}>
                  {index + 1}
                </div>
               
                
                {/* Card Title - FIXED TEXT */}
                <h3 className="font-black text-xl text-gray-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors z-20 relative">
                  {item.title}
                </h3>
                
                {/* Card Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black mb-6 drop-shadow-2xl tracking-widest text-white">
            Ready to Celebrate?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-tight font-light font-serif italic max-w-2xl mx-auto drop-shadow-lg text-white">
            Brij Bhog - Bhopal's Most Trusted Vegetarian Catering
          </p>
          <button className="bg-white/95 text-amber-700 px-14 py-5 lg:px-18 lg:py-6 rounded-3xl text-xl font-black hover:bg-amber-50 hover:text-amber-800 transition-all duration-500 shadow-2xl hover:shadow-4xl transform hover:-translate-y-3 hover:scale-105 backdrop-blur-xl relative z-20 border-2 border-white/40">
            Book Your Event Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialEventsCatering;

