import React, { useEffect } from "react";

const blogs = [
  {
    id: 1,
    title: "Best Wedding Catering Ideas",
    desc: "Discover the best catering ideas to make your wedding unforgettable with delicious food and elegant presentation.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    date: "Oct 5, 2025",
    read: "5 min read",
    author: "Brij Bhog Team",
  },
  {
    id: 2,
    title: "Top 10 Indian Wedding Dishes",
    desc: "Explore the most popular Indian dishes that every wedding menu should include.",
    img: "https://images8.alphacoders.com/103/1032061.jpg",
    date: "Oct 8, 2025",
    read: "7 min read",
    author: "Brij Bhog Team",
  },
  {
    id: 3,
    title: "Corporate Event Catering Tips",
    desc: "Learn how professional catering can make your corporate event more successful.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    date: "Oct 10, 2025",
    read: "6 min read",
    author: "Brij Bhog Team",
  },
  {
    id: 4,
    title: "Birthday Party Catering Guide",
    desc: "Make birthdays memorable with amazing catering menus and creative food ideas.",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    date: "Oct 12, 2025",
    read: "4 min read",
    author: "Brij Bhog Team",
  },
  {
    id: 5,
    title: "Traditional Indian Sweets",
    desc: "From Gulab Jamun to Rasmalai, explore traditional sweets loved at celebrations.",
    img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    date: "Oct 14, 2025",
    read: "6 min read",
    author: "Brij Bhog Team",
  },
  {
    id: 6,
    title: "Modern Catering Trends 2025",
    desc: "Check out the latest catering trends that are dominating weddings and events.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    date: "Oct 16, 2025",
    read: "8 min read",
    author: "Brij Bhog Team",
  },
];

const Blog = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Discover Amazing <span className="text-orange-500">Stories</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore the latest insights about catering, food trends, and event
          planning from Brij Bhog experts.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {blog.desc}
              </p>

              <div className="flex justify-between text-sm text-gray-500">
                <span>{blog.date}</span>
                <span>{blog.read}</span>
              </div>

              <div className="mt-4 text-sm font-medium text-orange-500">
                {blog.author}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;