

// import React from "react";
// import Logo from "@/assets/Logo7.jpg";

// const ClientTemplate = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center w-full p-4 sm:p-6 lg:p-8 relative overflow-hidden">
//       {/* Food Background Image - Fixed Height */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//           alt="Food Background"
//           className="w-full h-[60vh] sm:h-[70vh] object-cover object-center brightness-50 blur-sm scale-105"
//         />
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
//       </div>

//       {/* Content Card */}
//       <div className="relative bg-white backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full text-center border border-white/30 z-10">
        
//         {/* Logo */}
//         <div className="flex justify-center mb-6 sm:mb-8">
//           <img
//             src={Logo}
//             alt="Website Logo"
//             className="h-24 sm:h-14 md:h-16 lg:h-20 w-auto filter brightness-0 invert transition-all duration-300 hover:scale-105 "
//           />
//         </div>

//         {/* <h4>BY</h4> */}

//         <h4 className="text-2xl font-bold text-orange-500 tracking-[6px] uppercase">
//   BY
// </h4>

// <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
//   font-bold text-red-600 mb-6 sm:mb-8 md:mb-10 
//   tracking-wide leading-tight drop-shadow-lg"
//   style={{ fontFamily: "'Great Vibes', cursive" }}
// >
//   <i className="text-red-600" style={{ fontFamily:"serif" }}>A</i>nkit Sharma
// </h2>



//         <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4 font-medium italic">
//   We proudly provide premium catering services for{" "}
//   Our Clients
//   , offering delicious food and excellent service for special events.
// </p>
//       </div>
//     </div>
//   );
// };

// export default ClientTemplate;


import React from "react";
import Logo from "@/assets/Logo7.jpg";

const ClientTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Food Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Food Background"
          className="w-full h-[60vh] sm:h-[70vh] object-cover object-center brightness-50 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content Card */}
      <div className="relative bg-white backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full text-center border border-white/30 z-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img
            src={Logo}
            alt="Website Logo"
            className="h-24 sm:h-14 md:h-16 lg:h-20 w-auto filter brightness-0 invert transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* BY (Styled + Center Divider) */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-10 h-[2px] bg-orange-400"></span>
          <h4 className="text-lg font-semibold text-orange-500 tracking-[6px] uppercase">
            BY
          </h4>
          <span className="w-10 h-[2px] bg-orange-400"></span>
        </div>

        {/* Client Name */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
          font-bold text-red-600 mb-6 sm:mb-8 md:mb-10 
          tracking-wide leading-tight drop-shadow-lg"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <i className="text-red-600" style={{ fontFamily: "serif" }}>A</i>nkit Sharma
        </h2>

        {/* Description */}
        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4 font-medium italic">
          We proudly provide premium catering services for Our Clients,
          offering delicious food and excellent service for special events.
        </p>

      </div>
    </div>
  );
};

export default ClientTemplate;