

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Logo from "@/assets/Logo7.jpg";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About Us", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Blog", path: "/blog" },
//   { label: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
//       <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={Logo} alt="Brij Bhog Logo" className="h-20 object-contain" />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`font-body text-sm font-medium tracking-wide uppercase transition-colors ${
//                 location.pathname === link.path
//                   ? "text-primary"
//                   : "text-muted-foreground hover:text-primary"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           <Button asChild>
//             <Link to="/contact">
//               <Phone className="mr-2 h-4 w-4" />
//               Book Now
//             </Link>
//           </Button>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-foreground"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="md:hidden bg-background border-b border-border">
//           <nav className="flex flex-col px-6 py-4 gap-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="font-body text-base font-medium py-2 text-muted-foreground hover:text-primary"
//               >
//                 {link.label}
//               </Link>
//             ))}

//             <Button asChild className="mt-2">
//               <Link to="/contact" onClick={() => setIsOpen(false)}>
//                 <Phone className="mr-2 h-4 w-4" />
//                 Book Now
//               </Link>
//             </Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo7.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Brij Bhog Logo"
            className="
              h-16
              sm:h-18 
              md:h-20
              lg:h-22 
              w-auto 
              max-h-full 
              object-contain
            "
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium tracking-wide uppercase transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button asChild>
            <Link to="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-body text-base font-medium py-2 text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;