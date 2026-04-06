import { useState } from "react";

const events = [
  {
    name: "Shadi Party",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "Birthday Party",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
  },
  {
    name: "Reception Party",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
  },
  {
    name: "Home Inauguration Party",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  },
  {
    name: "Wedding Anniversary Party",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a",
  },
];

export default function EventGallery() {
  const [selected, setSelected] = useState(events[0]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Menu */}
        <div className="space-y-6">

          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelected(event)}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                🎉
              </div>

              <p className="text-gray-700 text-lg group-hover:text-red-500 transition">
                {event.name}
              </p>
            </div>
          ))}

        </div>

        {/* Right Image */}
        <div>
          <img
            src={selected.image}
            alt="event"
            className="rounded-lg shadow-lg w-full h-[350px] object-cover"
          />
        </div>

      </div>

    </div>
  );
}