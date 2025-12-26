import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs, BlogPost } from "@/constants/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.seo.metaTitle,
    description: blog.seo.metaDescription,
    keywords: blog.seo.keywords,
    openGraph: {
      title: blog.seo.metaTitle,
      description: blog.seo.metaDescription,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 600,
          alt: blog.imageAlt,
        },
      ],
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo.metaTitle,
      description: blog.seo.metaDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Article structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author.name,
      jobTitle: blog.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Nexo Tech IT",
      logo: {
        "@type": "ImageObject",
        url: "https://nexotechit.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nexotechit.com/blog/${blog.slug}`,
    },
    articleSection: blog.category,
    keywords: blog.seo.keywords.join(", "),
  };

  return (
    <article className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero Image Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {blog.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-foreground">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author.name}</span>
                <span className="text-muted-foreground/60">
                  • {blog.author.role}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl font-bold mt-12 mb-6 text-foreground first:mt-0"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl font-bold mt-8 mb-4 text-foreground"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="text-base md:text-lg leading-relaxed mb-6 text-foreground"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-inside mb-6 space-y-2 text-foreground"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal list-inside mb-6 space-y-2 text-foreground"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li className="text-base md:text-lg leading-relaxed" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-foreground" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-secondary/30 rounded-r"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) => {
                if (inline) {
                  return (
                    <code
                      className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
                      {...props}
                    />
                  );
                }
                return (
                  <code
                    className="block bg-secondary p-4 rounded-lg text-sm font-mono text-foreground overflow-x-auto my-6"
                    {...props}
                  />
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/20 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Professional Website?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let Nexo Tech IT help you build a fast, SEO-optimized website that
            drives real business results. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-6 text-base">
              <Link href="/#contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base"
            >
              <Link href="/blog">View More Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

