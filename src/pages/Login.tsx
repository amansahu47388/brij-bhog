

// // import React, { useState } from "react";

// // const Login = () => {
// //   const [open, setOpen] = useState(true);

// //   if (!open) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

// //       {/* Popup Box */}
// //       <div className="bg-white w-[900px] rounded-lg shadow-lg relative flex">

// //         {/* Close Button */}
// //         <button
// //           onClick={() => setOpen(false)}
// //           className="absolute top-4 right-4 text-xl font-bold"
// //         >
// //           ✕
// //         </button>

// //         {/* Left Image */}
// //         <div className="w-1/2">
// //           <img
// //             src="https://images.unsplash.com/photo-1555244162-803834f70033"
// //             alt="catering"
// //             className="h-full w-full object-cover rounded-l-lg"
// //           />
// //         </div>

// //         {/* Right Form */}
// //         <div className="w-1/2 p-10">

// //           <h2 className="text-2xl font-semibold text-center mb-2">
// //             BOOK YOUR CATERING SERVICE
// //           </h2>

// //           <p className="text-gray-500 text-center mb-6 text-sm">
// //             Let Brij Bhog make your event memorable with delicious food and premium catering services.
// //           </p>

// //           <form className="space-y-4">

// //             <input
// //               type="text"
// //               placeholder="Full Name"
// //               className="w-full border p-3 rounded outline-none"
// //             />

// //             <input
// //               type="tel"
// //               placeholder="Contact Number"
// //               className="w-full border p-3 rounded outline-none"
// //             />

// //             <input
// //               type="text"
// //               placeholder="Event Type (Wedding, Birthday, Corporate)"
// //               className="w-full border p-3 rounded outline-none"
// //             />

// //             <textarea
// //               placeholder="Tell us about your event..."
// //               className="w-full border p-3 rounded outline-none"
// //             ></textarea>

// //             <button
// //               className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
// //             >
// //               Request Catering
// //             </button>

// //           </form>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from "react";

// const Login = () => {
//   const [open, setOpen] = useState(true);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

//       {/* Popup Box */}
//       <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg relative flex flex-col md:flex-row overflow-hidden">

//         {/* Close Button */}
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute top-3 right-4 text-xl font-bold z-10"
//         >
//           ✕
//         </button>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 h-56 md:h-auto">
//           <img
//             src="https://images.unsplash.com/photo-1555244162-803834f70033"
//             alt="catering"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full md:w-1/2 p-6 md:p-10">

//           <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
//             BOOK YOUR CATERING SERVICE
//           </h2>

//           <p className="text-gray-500 text-center mb-6 text-sm">
//             Let Brij Bhog make your event memorable with delicious food and premium catering services.
//           </p>

//           <form className="space-y-4">

//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             <input
//               type="tel"
//               placeholder="Contact Number"
//               className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             <input
//               type="text"
//               placeholder="Event Type (Wedding, Birthday, Corporate)"
//               className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             <textarea
//               placeholder="Tell us about your event..."
//               className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
//               rows ="3"
//             ></textarea>

//             <button
//               className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition"
//             >
//               Request Catering
//             </button>

//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";

const Login = () => {
  const [open, setOpen] = useState(true);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg relative flex flex-col md:flex-row overflow-hidden">

        {/* Close Button */}
        {/* <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md text-xl font-bold z-50 hover:bg-gray-100"
        >
          ✕
        </button> */}

        <button
  onClick={() => setOpen(false)}
className="absolute top-16 md:top-6 right-4 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md text-xl font-bold z-50 hover:bg-gray-100">
  ✕
</button>

        {/* Image */}
        <div className="w-full md:w-1/2 h-56 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt="catering"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">

          <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
            BOOK YOUR CATERING SERVICE
          </h2>

          <p className="text-gray-500 text-center mb-6 text-sm">
            Let Brij Bhog make your event memorable with delicious food and premium catering services.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="text"
              placeholder="Event Type"
              className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="Tell us about your event..."
              rows="3"
              className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition"
            >
              Request Catering
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;