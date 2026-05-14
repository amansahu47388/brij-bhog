import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
};

export const SEO = ({
  title,
  description,
  keywords = ["catering", "events", "wedding catering", "corporate events", "Brij Bhog"],
  author = "Brij Bhog Catering",
  url = "https://brijbhog.com", // Change this to your actual production URL
  image = "https://brijbhog.com/og-image.jpg", // Change this to an actual preview image URL
  type = "website",
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes(author) ? title : `${title} | ${author}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="author" content={author} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={author} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
