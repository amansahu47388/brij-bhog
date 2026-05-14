import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const WEBSITE_ID = "69ff0fcf4524f59a651cf35c";
const API_BASE = "https://blogbackend.aegservices.in/api/public/blogs";

export interface BlogItem {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  featured_image?: string;
  coverImage?: string;
  image?: string;
  created_at?: string;
  published_at?: string;
  createdAt?: string;
  read_time?: number | string;
  readTime?: number | string;
  author?: string | { name?: string };
  tags?: string[];
  category?: string;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getAuthorName(author?: string | { name?: string }): string {
  if (!author) return "Brij Bhog Team";
  if (typeof author === "string") return author;
  return author.name || "Brij Bhog Team";
}

function getBlogImage(blog: BlogItem): string {
  return (
    blog.featured_image ||
    blog.coverImage ||
    blog.image ||
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  );
}

function getBlogExcerpt(blog: BlogItem): string {
  return blog.excerpt || blog.description || "";
}

function getReadTime(blog: BlogItem): string {
  const rt = blog.read_time ?? blog.readTime;
  if (!rt) return "";
  return String(rt);
}

// Skeleton card for loading state
const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-52 bg-gray-200" />
    <div className="p-6 space-y-3">
      <div className="h-5 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="flex justify-between mt-4">
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-3 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_BASE}?website_id=${WEBSITE_ID}`);
      if (!res.ok) throw new Error(`Failed to fetch blogs (${res.status})`);
      const data = await res.json();
      // API may return array directly or { blogs: [...] } or { data: [...] }
      const list: BlogItem[] = Array.isArray(data)
        ? data
        : data.value ?? data.blogs ?? data.data ?? [];
      setBlogs(list);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-50">
      <SEO
        title="Blog | Brij Bhog - Best Caterers in Bhopal"
        description="Explore the latest insights about catering, food trends, and event planning from Brij Bhog experts."
        keywords={["Best Caterers in Bhopal", "catering blog", "food trends"]}
      />

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
        {/* Loading skeletons */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

        {/* Error state */}
        {!loading && error && (
          <div className="col-span-full text-center py-20">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <button
              onClick={fetchBlogs}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && blogs.length === 0 && (
          <div className="col-span-full text-center py-20 text-gray-500">
            No blogs found at the moment. Check back soon!
          </div>
        )}

        {/* Blog cards */}
        {!loading &&
          !error &&
          blogs.map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition block"
            >
              <img
                src={getBlogImage(blog)}
                alt={blog.title}
                className="w-full h-52 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
                }}
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {getBlogExcerpt(blog)}
                </p>

                <div className="flex justify-between text-sm text-gray-500 ">
                  <span>{formatDate(blog.created_at || blog.published_at || blog.createdAt)}</span>
                  {getReadTime(blog) && <span>{getReadTime(blog)} Min read</span>}
                </div>

                <div className="mt-4 text-sm font-medium text-orange-500">
                  By {getAuthorName(blog.author)}
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
};

export default Blog;