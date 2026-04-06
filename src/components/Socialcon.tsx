import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Socialcon = () => {
  return (
    <div className="fixed right-5 bottom-10 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919303099808"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/brijbhogofficial"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaInstagram size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61588300631473"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaFacebookF size={22} />
      </a>

    </div>
  );
};

export default Socialcon;