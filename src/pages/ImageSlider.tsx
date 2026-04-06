// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import "swiper/css";

// // // import img1 from "@/assets/catering1.jpg";
// // // import img2 from "@/assets/catering2.jpg";
// // // import img3 from "@/assets/catering3.jpg";

// // // const ImageSlider = () => {
// // //   return (
// // //     <div className="w-full py-10 bg-gray-100">
// // //       <Swiper
// // //         spaceBetween={20}
// // //         slidesPerView={1}
// // //         autoplay={{ delay: 3000 }}
// // //         loop={true}
// // //       >
// // //         <SwiperSlide>
// // //           <img src="https://th.bing.com/th/id/OIP.OMngCEc_uvllpAgXpVxZ4AHaEN?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-[400px] object-cover rounded-xl" />
// // //         </SwiperSlide>

// // //         <SwiperSlide>
// // //           <img src="https://i.pinimg.com/originals/09/5f/b1/095fb1b40072beabd950b6df1ee095b1.jpg" className="w-full h-[400px] object-cover rounded-xl" />
// // //         </SwiperSlide>

// // //         <SwiperSlide>
// // //           <img src="https://th.bing.com/th/id/R.3a92720142577edb41d122bbf406973d?rik=gLGeMfp5%2fLgS2g&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fSELLER%2fDefault%2f2024%2f5%2f415009309%2fKO%2fTQ%2fCZ%2f129952027%2fwedding-stage-decorator-1000x1000.jpg&ehk=juFQcnMfQA3N3kZsRrfA6rJJZUyCEj6GZoLUz03a9IY%3d&risl=&pid=ImgRaw&r=0" className="w-full h-[400px] object-cover rounded-xl" />
// // //         </SwiperSlide>
// // //       </Swiper>
// // //     </div>
// // //   );
// // // };

// // // export default ImageSlider;

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay module
// // import "swiper/css";

// // const ImageSlider = () => {
// //   return (
// //     <div className="w-full py-10 bg-gray-100">
// //       <Swiper
// //         modules={[Autoplay]} // ✅ Register the module
// //         spaceBetween={20}
// //         slidesPerView={1}
// //         autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ disableOnInteraction: false keeps autoplay running after manual swipe
// //         loop={true}
// //       >
// //         <SwiperSlide>
// //           <img src="https://tse3.mm.bing.net/th/id/OIP.X4jqveCMWuyYXnDltp3nPAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-[400px] object-cover rounded-xl" />
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <img src="https://tse1.mm.bing.net/th/id/OIP.tO1cFiO0Z2oaNWUCz-c2swHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-[400px] object-cover rounded-xl" />
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <img src="https://img.freepik.com/premium-photo/mandap-indian-hindu-wedding-ceremony-decorated-hall_747653-20135.jpg" className="w-full h-[400px] object-cover rounded-xl" />
// //         </SwiperSlide>
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default ImageSlider;


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const ImageSlider = () => {
//   return (
//     <div className="w-full h-screen">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         className="h-full"
//       >
//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/premium-photo/mandap-indian-hindu-wedding-ceremony-decorated-hall_747653-20135.jpg"
//             className="w-full h-screen object-cover"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="https://static.vecteezy.com/system/resources/thumbnails/030/834/987/small_2x/a-wedding-stage-decorated-with-red-flowers-and-gold-ai-generated-photo.jpg"
//             className="w-full h-screen object-cover"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="https://img.freepik.com/premium-photo/indian-wedding-ceremony-stage-decoration-groom-bridal_747653-19359.jpg"
//             className="w-full h-screen object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ImageSlider = () => {
  return (
    <div className="w-full h-[80vh]"> {/* Fixed height */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
        style={{ "--swiper-wrapper-transition-timing-function ": "linear" }}
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://img.freepik.com/premium-photo/mandap-indian-hindu-wedding-ceremony-decorated-hall_747653-20135.jpg"
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-105 filter-none !important"
              loading="eager"
              alt="Wedding Stage"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/030/834/987/small_2x/a-wedding-stage-decorated-with-red-flowers-and-gold-ai-generated-photo.jpg"
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-105 filter-none !important"
              loading="eager"
              alt="Wedding Decoration"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://img.freepik.com/premium-photo/indian-wedding-ceremony-stage-decoration-groom-bridal_747653-19359.jpg"
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-105 filter-none !important"
              loading="eager"
              alt="Bridal Stage"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
