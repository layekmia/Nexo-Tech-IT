import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { BlogPost } from "@/constants/blogs";

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

export function BlogCard({ blog, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (featured) {
    return (
      <Link href={`/blog/${blog.slug}`} className="group block">
        <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {blog.category}
            </Badge>
          </div>
          <CardHeader className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
              {blog.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed line-clamp-2">
              {blog.excerpt}
            </p>
          </CardHeader>
          <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{blog.readingTime} min read</span>
            </div>
            <div className="ml-auto text-primary font-medium group-hover:underline">
              Read more →
            </div>
          </CardFooter>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${blog.slug}`} className="group block h-full">
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {blog.category}
          </Badge>
        </div>
        <CardHeader className="flex-1">
          <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
        </CardHeader>
        <CardFooter className="flex items-center gap-3 text-xs text-muted-foreground pt-0">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formatDate(blog.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{blog.readingTime} min</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

