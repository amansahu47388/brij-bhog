
// import { useEffect, useRef, useState } from "react";
// import Video from "../assets/Flow_delpmaspu_ (2).mp4";
// import Logo from "../assets/Logo3.png";

// const Loader = ({ onComplete }: { onComplete: () => void }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   useEffect(() => {
//     // Lock scrolling while loader is active
//     document.body.style.overflow = "hidden";
    
//     // Attempt to speed up the video if already ready
//     if (videoRef.current && isVideoLoaded) {
//       videoRef.current.playbackRate = 2.0;
//     }

//     return () => {
//       // Restore scrolling on unmount
//       document.body.style.overflow = "auto";
//     };
//   }, [isVideoLoaded]);

//   const handleVideoLoad = () => {
//     setIsVideoLoaded(true);
//     if (videoRef.current) {
//       videoRef.current.play().catch(err => console.log("Video play failed:", err));
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden w-screen h-[100dvh]">
      
//       {/* Premium Loading Spinner with Logo */}
//       {!isVideoLoaded && (
//         <div className="flex flex-col items-center gap-6 animate-pulse z-20">
//           <div className="relative">
//             <img
//               src={Logo}
//               alt="Brij Bhog Logo"
//               className="w-32 md:w-48 h-auto opacity-90 scale-animation"
//             />
//             {/* Elegant Spinning Border */}
//             <div className="absolute -inset-4 border-t-2 border-yellow-500 rounded-full animate-spin"></div>
//             <div className="absolute -inset-4 border-2 border-yellow-500/10 rounded-full"></div>
//           </div>
//           <p className="text-yellow-500 font-display text-sm md:text-base tracking-[0.4em] uppercase text-center ml-[0.4em]">
//             Brij Bhog Brilliance
//           </p>
//         </div>
//       )}

//       {/* Video with smooth fade-in and proper contain fit (no zoom) */}
//       <video
//         ref={videoRef}
//         src={Video}
//         autoPlay
//         muted
//         playsInline
//         onLoadedData={handleVideoLoad}
//         onEnded={onComplete}
//         className={`fixed top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
//       />



//       {/* Skip Button - positioned fixed relative to viewport */}
//       <button
//         onClick={onComplete}
//         className={`absolute bottom-10 right-10 z-[10000] group flex items-center gap-3 text-white/40 hover:text-white transition-all duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//       >
//         <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-500"></div>
//         <span className="text-xs tracking-[0.3em] uppercase font-light">Skip Intro</span>
//       </button>

//       <style dangerouslySetInnerHTML={{
//         __html: `
//         @keyframes scale-pulse {
//           0%, 100% { transform: scale(1); opacity: 0.9; }
//           50% { transform: scale(1.05); opacity: 1; }
//         }
//         .scale-animation {
//           animation: scale-pulse 3s infinite ease-in-out;
//         }
//       `}} />
//     </div>
//   );
// };

// export default Loader;

