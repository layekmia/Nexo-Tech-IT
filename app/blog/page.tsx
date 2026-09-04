import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogsData } from "@/constants/blogs";

export const metadata: Metadata = {
  title: "Blog — Software Development Insights & Industry Guides",
  description:
    "Expert guides and insights on custom software development, LMS platforms, e-commerce, POS systems, and IT consulting. Written by the Nexo Tech IT team.",
  keywords: ["software development blog", "IT consulting articles", "custom software guides", "LMS insights", "ecommerce development tips"],
  alternates: {
    canonical: "https://nexotechit.com/blog",
  },
  openGraph: {
    title: "Blog — Software Development Insights | Nexo Tech IT",
    description: "Expert articles on custom software, SaaS, e-commerce, LMS, POS, and IT consulting from the Nexo Tech IT team.",
    url: "https://nexotechit.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Blog</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Nexo Tech IT team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post, i) => (
              <Reveal key={post.slug} delay={0.1 * i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`} className="aspect-[16/9] bg-slate-100 block relative overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={`${post.title} - Nexo Tech IT Blog`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </Link>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                     <span className="text-primary font-bold uppercase tracking-wider">{post.category}</span>
                     <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                     <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  </Link>
                  <p className="text-slate-600 text-sm flex-1 mb-6">{post.desc}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
