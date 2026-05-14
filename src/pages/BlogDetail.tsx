import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const WEBSITE_ID = "69ff0fcf4524f59a651cf35c";
const API_BASE = "https://blogbackend.aegservices.in/api/public/blogs";

interface BlogDetail {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  content?: string;
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
    month: "long",
    day: "numeric",
  });
}

function getAuthorName(author?: string | { name?: string }): string {
  if (!author) return "Brij Bhog Team";
  if (typeof author === "string") return author;
  return author.name || "Brij Bhog Team";
}

function getBlogImage(blog: BlogDetail): string {
  return (
    blog.featured_image ||
    blog.coverImage ||
    blog.image ||
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
  );
}

function getReadTime(blog: BlogDetail): string {
  const rt = blog.read_time ?? blog.readTime;
  if (!rt) return "";
  return String(rt);
}

function getExcerpt(blog: BlogDetail): string {
  return blog.excerpt || blog.description || "";
}

const BlogDetail = () => {
  const { id: slug } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) fetchBlog(slug);
  }, [slug]);

  const fetchBlog = async (blogSlug: string) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `${API_BASE}/${blogSlug}?website_id=${WEBSITE_ID}`
      );
      if (!res.ok) throw new Error(`Blog not found (${res.status})`);
      const data = await res.json();
      // API may return object directly, { blog: {} }, { data: {} }, or { value: [{}] }
      let blogData: BlogDetail | null = null;
      if (data._id) {
        blogData = data;
      } else if (data.blog) {
        blogData = data.blog;
      } else if (data.data) {
        blogData = data.data;
      } else if (Array.isArray(data.value) && data.value.length > 0) {
        blogData = data.value[0];
      }
      setBlog(blogData);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Failed to load this blog."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ──────────────── Loading state ──────────────── */
  if (loading) {
    return (
      <div className="w-full bg-gray-50 min-h-screen pb-20">
        {/* Hero skeleton */}
        <div className="w-full h-[40vh] md:h-[60vh] bg-gray-300 animate-pulse" />

        <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-t-2xl shadow-sm -mt-10 relative z-10 md:rounded-xl md:shadow-md animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-24 mb-8" />
          <div className="h-5 bg-gray-200 rounded w-full mb-3" />
          <div className="h-5 bg-gray-200 rounded w-4/5 mb-8" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-4">
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-11/12 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ──────────────── Error / Not found state ──────────────── */
  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-3xl font-bold">
          {error ? "Something went wrong" : "Blog not found"}
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        <Link to="/blog" className="text-orange-500 hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const coverImage = getBlogImage(blog);
  const excerpt = getExcerpt(blog);
  const readTime = getReadTime(blog);
  const authorName = getAuthorName(blog.author);
  const publishDate = formatDate(blog.created_at || blog.published_at || blog.createdAt);

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      <SEO
        title={`${blog.title} | Brij Bhog - Best Caterers in Bhopal`}
        description={excerpt || blog.title}
        keywords={[
          "Best Caterers in Bhopal",
          "premium catering services in Bhopal",
          ...(blog.tags || []),
        ]}
      />

      {/* HEADER SECTION */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img
          src={coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center pt-20">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {blog.title}
            </h1>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 text-gray-200 text-sm md:text-base">
              {publishDate && <span>{publishDate}</span>}
              {publishDate && authorName && (
                <span className="hidden md:inline">•</span>
              )}
              {authorName && <span>{authorName}</span>}
              {readTime && <span className="hidden md:inline">•</span>}
              {readTime && <span>{readTime} min read</span>}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-t-2xl shadow-sm -mt-10 relative z-10 md:rounded-xl md:shadow-md">
        <Link
          to="/blog"
          className="inline-block mb-8 text-orange-500 hover:text-orange-600 font-medium transition"
        >
          ← Back to All Blogs
        </Link>

        {/* Excerpt / Description */}
        {excerpt && (
          <p className="text-xl text-gray-600 italic mb-10 border-l-4 border-orange-500 pl-4">
            {excerpt}
          </p>
        )}

        {/* Blog content — rendered as HTML if available, plain text otherwise */}
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 blog-content">
          {blog.content ? (
            <div
              className="quill-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <p className="text-gray-500 italic">No content available.</p>
          )}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
