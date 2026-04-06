// 

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Profile from "./components/Profile";
// import ProfileDetail from "./pages/ProfileDetail";
import VenueDetail from "./pages/VenueDetail";
import Venues from "./components/Venues";
import ProfileDetail from "./pages/ProfileDetail";
import CorporateEvents from "./pages/CorporateEvents";
import WeddingEvents from "./pages/WeddingEvents";
import BirthdayParties from "./pages/BirthdayParties";
import ReceptionCatering from "./pages/ReceptionCatering";
import OutdoorPage from "./pages/OutdoorPage";
import Socialcon from "./components/Socialcon";
import Blog from "./pages/Blog";
import MenuPlanning from "./pages/MenuPlanning";
import SocialEventsCatering from "./pages/SocialEventsCatering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter 
       
      >
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:slug" element={<ProfileDetail/>} />

            <Route path="/reception-catering" element={<ReceptionCatering />} />
            <Route path="/outdoor-catering" element={<OutdoorPage />} />

       
        <Route path="/venues/:venueSlug" element={<VenueDetail/>} />
        <Route path="/corporate-events" element={<CorporateEvents />} />
        <Route path="/wedding-events" element={<WeddingEvents/>} />
        <Route path="/birthday-parties" element={<BirthdayParties />} />
          <Route path="/blog" element={<Blog />} />
           <Route path="/Social-events" element={<SocialEventsCatering/>} />

            
          </Routes>
        </main>
        <Socialcon/>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
