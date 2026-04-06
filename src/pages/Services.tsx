


import React, { useEffect } from "react";
import { Utensils, Coffee, Martini, Users } from "lucide-react";

const Services = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

const services = [
  {
    icon: <Utensils size={32} />,
    title: "Buffer Setup",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033",
    desc: "Well-organized buffet setups with elegant food presentation."
  },
  {
    icon: <Coffee size={32} />,
    title: "Live Food Counters",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/VL/JJ/ZD/54424153/basic-indian-wedding-catering-services-for-eating-live-counters-500x500.jpg",
    desc: "Fresh dishes prepared live for an interactive dining experience."
  },
  {
    icon: <Martini size={32} />,
    title: "Service Staff",
    image:
      "https://www.myjars.org/wp-content/uploads/2024/03/Best-Kitchen-Staff-Job-Description-800x457.jpg",
    desc: "Professional staff ensuring smooth and efficient food service."
  },
  {
    icon: <Users size={32} />,
    title: "Event Decoration",
    image:
      "https://c8.alamy.com/comp/BNHYPP/event-company-evening-decoration-adornment-table-desk-festival-food-BNHYPP.jpg",
    desc: "Beautiful event decorations that enhance the celebration atmosphere."
  },{
    icon: <Users size={32} />,
    title: "Lighting & Power Management",
    image:
      "https://static.designboom.com/wp-content/dbsub/415204/2018-07-25/img_3_1532517338_738eae98a02a2c5321f650c72d1ee9fa.jpg",
    desc: "Reliable lighting and power arrangements for uninterrupted events."
  },{
     icon: <Utensils size={32} />, 
     title: "Event Catering", 
     image: "https://tse3.mm.bing.net/th/id/OIP.VP3fRP8p5bQVeFvImXFE2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Exceptional culinary experiences for weddings, corporate events and private parties." },
      // , { 
      //   icon: <Coffee size={32} />, 
      //   title: "Custom Menus", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", 
      //   desc: "Personalized menu planning to meet your unique tastes and dietary needs." },
         { icon: <Martini size={32} />, 
         title: "Food Presentation",
          image: "https://images.squarespace-cdn.com/content/v1/63cae41a333ef829d79269a0/06181e64-c4d0-4e9e-acf2-c3c84d780c15/chefs_hands_using_professional_plating_tools_artfully__1486ba27-c9e2-4394-8a89-7f9be5154282.png?format=2500w",
           desc: "Elegant and creative food displays that enhance the visual appeal of your event." }, 
           { icon: <Users size={32} />,
            title: "Event Coordination", 
            image: "https://tripleseat.com/wp-content/uploads/2022/08/event-coordinator.jpg",
             desc: "Complete event coordination including setup, service and cleanup." } ];
;
  return (
    <div className="bg-white">

      {/* Premium Services Title */}
      <section className="py-32 bg-[#0f172a] text-white text-center">
        <h2 className="text-4xl font-bold mt-4">Our Premium Services</h2>
      </section>

      {/* Services Cards */}
      <section className="py-16 max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition"
          >

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-6 text-center">

              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border-4 border-gray-800 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

            </div>
          </div>
        ))}
      </section>

      {/* Booking Section */}
      {/* <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Book Us Now For Your Next Event
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl text-black">
            <p className="mb-4 text-gray-600">
              Your event deserves the best menu. Let us make it extraordinary.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-3 p-3 border rounded-full"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Phone"
                className="p-3 border rounded-full"
              />

              <select className="p-3 border rounded-full">
                <option>Event Type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
              </select>
            </div>

            <button className="w-full mt-4 bg-black text-white py-3 rounded-full">
              Submit
            </button>
          </div>

        </div>
        
      </section> */}


      {/* Booking Section */}
<section className="relative py-24">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
      alt="catering event"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="text-white space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Book Us For Your Next <br /> Celebration
      </h2>

      <p className="text-gray-200 max-w-lg">
        From weddings to corporate events, our catering team delivers
        exceptional food and unforgettable experiences.
      </p>

      <ul className="space-y-2 text-gray-300 text-sm">
        <li>✔ Premium Catering Services</li>
        <li>✔ Customized Menu Planning</li>
        <li>✔ Professional Event Management</li>
      </ul>

    </div>

    {/* Booking Form */}
    <div className="bg-white p-8 rounded-2xl shadow-2xl">

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Request A Quote
      </h3>

      <p className="text-gray-500 mb-6 text-sm">
        Fill the form below and our team will contact you shortly.
      </p>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        <select
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <option>Select Event Type</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate</option>
          <option>Outdoor Catering</option>
        </select>

        <textarea
          placeholder="Event Details"
          rows="3"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Request
        </button>

      </form>

    </div>

  </div>

</section>

    </div>
  );
};

export default Services;