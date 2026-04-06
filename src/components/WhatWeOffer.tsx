


import { Link } from "react-router-dom";
import weddingCatering from "@/assets/wedding-catering.jpg";
import corporateEvents from "@/assets/corporate-events.jpg";
import birthdayParty from "@/assets/birthday-party.jpg";
import receptionCatering from "@/assets/reception-catering.jpg";
import outdoorCatering from "@/assets/outdoor-catering.jpg";

const services = [
  { image: weddingCatering, title: "Wedding Catering", slug: "wedding-catering" },
  { image: corporateEvents, title: "Corporate Events", slug: "corporate-events" },
  { image: birthdayParty, title: "Birthday Parties", slug: "birthday-parties" },
  { image: receptionCatering, title: "Reception Catering", slug: "reception-catering" },
  { image: outdoorCatering, title: "Outdoor Catering", slug: "outdoor-catering" },
   {image:"https://media.istockphoto.com/photos/catering-food-wedding-event-table-picture-id650655146?k=20&m=650655146&s=612x612&w=0&h=gbGiOeig8Fz2NeKL4RonUcAPQIVqd2B8MDCyf62ugNU=",
    title:"Social-events",
    slug:"Social-events"
   }
];

const WhatWeOffer = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">

        <div className="text-center mb-14">
          <p className="font-body text-primary font-medium tracking-[0.25em] uppercase text-sm mb-3">
            Our Expertise
          </p>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="gold-text-gradient">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (

            <Link
              key={service.slug}
              

              to={
  service.slug === "corporate-events"
    ? "/corporate-events"
    : service.slug === "wedding-catering"
    ? "/wedding-events"
    : service.slug === "birthday-parties"
    ? "/birthday-parties"
    : service.slug === "reception-catering"
    ? "/reception-catering"
    : service.slug === "outdoor-catering"
    ? "/outdoor-catering"
    : service.slug === "Social-events"
    ? "/Social-events"
    : "/Social-events"
}
              className="group bg-background border border-border rounded-lg overflow-hidden card-hover h-full cursor-pointer block"
            >

              <div className="aspect-[16/10] overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="300"
                />

              </div>

              <div className="p-6">

                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

              </div>

            </Link>

          ))}

        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;