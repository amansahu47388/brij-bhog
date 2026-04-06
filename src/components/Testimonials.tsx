// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Priya Sharma",
//     event: "Wedding Reception",
//     text: "Brij Bhog made our wedding reception absolutely magical. The food was divine and the décor was breathtaking. Our guests are still talking about it!",
//   },
//   {
//     name: "Rajesh Gupta",
//     event: "Corporate Gala",
//     text: "Professional, punctual, and perfectly executed. Their corporate event catering exceeded all our expectations. Highly recommend for business events.",
//   },
//   {
//     name: "Anita Mehra",
//     event: "50th Birthday Party",
//     text: "From planning to execution, everything was flawless. The personalized menu for my husband's milestone birthday was a hit with everyone.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="section-padding bg-background">
//       <div className="container-wide">
//         <div className="text-center mb-14">
//           <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
//             Testimonials
//           </span>
//           <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
//             What Our Clients Say
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t) => (
//             <div
//               key={t.name}
//               className="bg-card rounded-lg p-8 border border-border hover-lift"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={16} className="fill-accent text-accent" />
//                 ))}
//               </div>
//               <p className="text-muted-foreground leading-relaxed mb-6 italic">
//                 "{t.text}"
//               </p>
//               <div>
//                 <p className="font-display font-semibold text-foreground">{t.name}</p>
//                 <p className="text-sm text-accent">{t.event}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Reception",
    text: "Brij Bhog made our wedding reception absolutely magical. The food was divine and the décor was breathtaking. Our guests are still talking about it!",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  },
  {
    name: "Rajesh Gupta",
    event: "Corporate Gala",
    text: "Professional, punctual, and perfectly executed. Their corporate event catering exceeded all our expectations. Highly recommend for business events.",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  },
  {
    name: "Anita Mehra",
    event: "50th Birthday Party",
    text: "From planning to execution, everything was flawless. The personalized menu for my husband's milestone birthday was a hit with everyone.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  },
];

const Testimonials = () => {
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
            What Our Clients Say
          </h2>

          <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        </div>

        {/* CARDS */}

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden border-2 border-orange-400 p-6 text-center bg-black/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
              />

              <div className="relative z-10">

                {/* STARS */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* REVIEW TEXT */}
                <p className="text-sm text-gray-200 mb-6 italic">
                  "{item.text}"
                </p>

                {/* NAME */}
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="text-orange-300 text-sm">
                  {item.event}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
