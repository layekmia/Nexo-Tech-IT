import { Metadata } from "next";
import { blogs } from "@/constants/blogs";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Insights & Resources for Growing Businesses",
  description:
    "Expert insights on web development, SEO, e-commerce, and startup growth. Learn from Nexo Tech IT's team of experienced developers and digital strategists.",
  keywords: [
    "web development blog",
    "SEO tips",
    "e-commerce guide",
    "startup resources",
    "Next.js tutorials",
    "website development insights",
  ],
  openGraph: {
    title: "Blog | Nexo Tech IT - Insights & Resources",
    description:
      "Expert insights on web development, SEO, e-commerce, and startup growth.",
    type: "website",
  },
};

export default function BlogPage() {
  // Get the most recent blog as featured
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  // Blog Collection structured data for SEO
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog | Nexo Tech IT",
    description:
      "Expert insights on web development, SEO, e-commerce, and startup growth. Learn from Nexo Tech IT's team of experienced developers and digital strategists.",
    url: "https://nexotechit.com/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: blog.title,
          description: blog.excerpt,
          image: blog.image,
          datePublished: blog.publishedAt,
          url: `https://nexotechit.com/blog/${blog.slug}`,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Blog Collection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Insights & Resources
            </span>
            <span className="block mt-2 text-foreground">
              for Growing Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert insights on web development, SEO optimization, e-commerce
            strategies, and startup growth. Learn from our team of experienced
            developers and digital strategists.
          </p>
        </div>
      </section>

      {/* Featured Blog Section */}
      {featuredBlog && (
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Featured Article
              </h2>
              <p className="text-muted-foreground">
                Our latest insights and expert advice
              </p>
            </div>
            <div className="max-w-4xl">
              <BlogCard blog={featuredBlog} featured />
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              All Articles
            </h2>
            <p className="text-muted-foreground">
              Explore our complete collection of resources
            </p>
          </div>

          {otherBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                More articles coming soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

