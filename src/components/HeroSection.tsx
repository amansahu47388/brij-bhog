// // // // import { Link } from "react-router-dom";
// // // // import { Button } from "@/components/ui/button";
// // // // import { ArrowRight } from "lucide-react";
// // // // import heroImage from "@/assets/hero-catering.jpg";

// // // // const HeroSection = () => {
// // // //   return (
// // // //     <section className="relative min-h-screen flex items-center">
// // // //       <div
// // // //         className="absolute inset-0 bg-cover bg-center"
// // // //         style={{ backgroundImage: `url(${heroImage})` }}
// // // //       />
// // // //       <div className="hero-overlay absolute inset-0" />

// // // //       <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 pt-20">
// // // //         <div className="max-w-2xl">
// // // //           <span className="inline-block text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-up">
// // // //             Premium Catering Service
// // // //           </span>
// // // //           <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up-delay-1">
// // // //             परंपरा का स्वाद, आधुनिक अंदाज़<br />
// // // //             {/* <span className="text-gold-gradient">Masterpieces</span> */}
// // // //           </h1>
// // // //           <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up-delay-2">
// // // //             From intimate gatherings to grand celebrations, we bring flavor, elegance, and unforgettable experiences to every event.
// // // //           </p>
// // // //           <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
// // // //             <Button size="lg" variant="secondary" asChild>
// // // //               <Link to="/contact">
// // // //                 Book Your Event
// // // //                 <ArrowRight className="ml-2 h-5 w-5" />
// // // //               </Link>
// // // //             </Button>
// // // //             <Button
// // // //   size="lg"
// // // //   className="px-6 py-3 border-2 border-white text-white rounded-full 
// // // //   font-semibold hover:bg-white hover:text-black transition duration-300"
// // // //   asChild
// // // // >
// // // //   <Link to="/services">Explore Services</Link>
// // // // </Button>
// // // //             {/* <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
// // // //               <Link to="/services">Explore Services</Link>
// // // //             </Button> */}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HeroSection;

// // // // import { Link } from "react-router-dom";
// // // // import { Button } from "@/components/ui/button";
// // // // import { ArrowRight } from "lucide-react";
// // // // import ImageSlider from "@/pages/ImageSlider";
// // // // // import ImageSlider from "@/components/ImageSlider"; // ✅ ImageSlider import करो

// // // // const HeroSection = () => {
// // // //   return (
// // // //     <section className="relative min-h-screen flex flex-col">
      
// // // //       {/* ✅ Background image और overlay हटा दिए, ImageSlider लगाया */}
// // // //       <div className="w-full">
// // // //         <ImageSlider/>
// // // //       </div>

// // // //       <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 pt-10 pb-16">
// // // //         <div className="max-w-2xl">
// // // //           <span className="inline-block text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-up">
// // // //             Premium Catering Service
// // // //           </span>
// // // //           <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up-delay-1">
// // // //             परंपरा का स्वाद, आधुनिक अंदाज़
// // // //           </h1>
// // // //           <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up-delay-2">
// // // //             From intimate gatherings to grand celebrations, we bring flavor, elegance, and unforgettable experiences to every event.
// // // //           </p>
// // // //           <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
// // // //             <Button size="lg" variant="secondary" asChild>
// // // //               <Link to="/contact">
// // // //                 Book Your Event
// // // //                 <ArrowRight className="ml-2 h-5 w-5" />
// // // //               </Link>
// // // //             </Button>
// // // //             <Button
// // // //               size="lg"
// // // //               className="px-6 py-3 border-2 border-black text-black rounded-full 
// // // //               font-semibold hover:bg-black hover:text-white transition duration-300"
// // // //               asChild
// // // //             >
// // // //               <Link to="/services">Explore Services</Link>
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //     </section>
// // // //   );
// // // // };

// export default HeroSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageSlider from "@/pages/ImageSlider";
// import ImageSlider from "@/components/ImageSlider";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      
      {/* Image Slider */}
      <div className="relative w-full">
        <ImageSlider />

        {/* ✅ Text slider ke upar absolute position mein */}
        <div className="absolute inset-0 z-10 flex items-center bg-black/40">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block text-yellow-400 font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-up">
                Premium Catering Service
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up-delay-1">
                परंपरा का स्वाद, आधुनिक अंदाज़
              </h1>
              <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up-delay-2">
                From intimate gatherings to grand celebrations, we bring flavor,
                elegance, and unforgettable experiences to every event.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Book Your Event
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="px-6 py-3 border-2 border-white text-white rounded-full 
                  font-semibold hover:bg-white hover:text-black transition duration-300"
                  asChild
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;


// // import { Link } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { ArrowRight } from "lucide-react";
// // import ImageSlider from "@/pages/ImageSlider";

// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-screen flex flex-col">
// //       {/* Image Slider */}
// //       <div className="relative w-full">
// //         <ImageSlider />

// //         {/* ✅ Fixed overlay - कम blur वाला */}
// //         <div className="absolute inset-0 z-20 flex items-center bg-gradient-to-b from-black/10 via-black/20 to-black/40">
// //           <div className="container-wide px-4 sm:px-6 lg:px-8 w-full">
// //             <div className="max-w-3xl text-center md:text-left">
// //               <span className="inline-block text-yellow-400 font-semibold text-sm tracking-[0.2em] uppercase mb-6 animate-fade-up">
// //                 Premium Catering Service
// //               </span>
// //               <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 animate-fade-up-delay-1 drop-shadow-2xl">
// //                 परंपरा का स्वाद, आधुनिक अंदाज़
// //               </h1>
// //               <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-up-delay-2 drop-shadow-md">
// //                 From intimate gatherings to grand celebrations, we bring flavor,
// //                 elegance, and unforgettable experiences to every event.
// //               </p>
// //               <div className="flex flex-wrap gap-6 animate-fade-up-delay-3">
// //                 <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100 shadow-2xl" asChild>
// //                   <Link to="/contact">
// //                     Book Your Event
// //                     <ArrowRight className="ml-2 h-5 w-5" />
// //                   </Link>
// //                 </Button>
// //                 <Button
// //                   size="lg"
// //                   className="px-8 py-4 border-2 border-white text-white rounded-full 
// //                   font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl"
// //                   asChild
// //                 >
// //                   <Link to="/services">Explore Services</Link>
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import ImageSlider from "@/pages/ImageSlider";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col">
//       {/* Image Slider */}
//       <div className="relative w-full">
//         <ImageSlider />

//         {/* ✅ Text को CENTER में */}
//         <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-black/10 via-black/20 to-black/40">
//           <div className="container-wide px-4 sm:px-6 lg:px-8 w-full text-center">
//             <div className="max-w-4xl mx-auto">
//               <span className="inline-block text-yellow-400 font-semibold text-sm tracking-[0.2em] uppercase mb-6 animate-fade-up">
//                 Premium Catering Service
//               </span>
//               <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 animate-fade-up-delay-1 drop-shadow-2xl">
//                 परंपरा का स्वाद,<br /> आधुनिक अंदाज़
//               </h1>
//               <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up-delay-2 drop-shadow-md">
//                 From intimate gatherings to grand celebrations, we bring flavor,
//                 elegance, and unforgettable experiences to every event.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up-delay-3">
//                 <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100 shadow-2xl px-8 py-4 text-lg" asChild>
//                   <Link to="/contact">
//                     Book Your Event
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button
//                   size="lg"
//                   className="px-10 py-4 border-2 border-white text-white rounded-full 
//                   font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl"
//                   asChild
//                 >
//                   <Link to="/services">Explore Services</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import ImageSlider from "@/pages/ImageSlider";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[80vh] flex flex-col">
//       {/* ✅ FIXED - Perfect height match */}
//       <div className="relative w-full h-[80vh]">
//         {/* Image enhancement wrapper */}
//         <div className="w-full h-full brightness-125 contrast-125">
//           <ImageSlider />
//         </div>

//         {/* ✅ Super light gradient overlay */}
//         <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-transparent via-black/10 to-black/30">
//           <div className="container-wide px-4 sm:px-6 lg:px-8 w-full text-center">
//             <div className="max-w-4xl mx-auto">
//               <span className="inline-block text-black font-semibold text-sm tracking-[0.2em] uppercase mb-6 animate-fade-up">
//                 Premium Catering Service
//               </span>
//               <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 animate-fade-up-delay-1 drop-shadow-2xl">
//                 परंपरा का स्वाद,<br /> आधुनिक अंदाज़
//               </h1>
//               <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up-delay-2 drop-shadow-md">
//                 From intimate gatherings to grand celebrations, we bring flavor,
//                 elegance, and unforgettable experiences to every event.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up-delay-3">
//                 <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100 shadow-2xl px-8 py-4 text-lg" asChild>
//                   <Link to="/contact">
//                     Book Your Event
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button
//                   size="lg"
//                   className="px-10 py-4 border-2 border-white text-white rounded-full 
//                   font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl"
//                   asChild
//                 >
//                   <Link to="/services">Explore Services</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
