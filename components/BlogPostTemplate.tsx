"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  citations: Array<{ id: string; text: string; url: string }>;
  featuredImage: string;
  author: string;
  authorBio: string;
  metadata: { description: string };
  relatedArticles: Array<{ id: string; title: string; excerpt: string }>;
}

export default function BlogPostTemplate({
  title,
  date,
  content,
  citations,
  featuredImage,
  author,
  authorBio,
  metadata,
  relatedArticles,
}: BlogPostProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${title}`;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(title)}`;
        break;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground mb-4">Published on {date}</p>

      <div className="flex items-center space-x-4 mb-8">
        <span className="text-sm text-muted-foreground">Share:</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleShare("twitter")}
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleShare("linkedin")}
        >
          <LinkedIn className="w-4 h-4" />
        </Button>
        <span className="animate-pulse">
          <ArrowRight className="w-4 h-4 text-primary" />
        </span>
      </div>

      <Image
        src={featuredImage}
        alt={title}
        width={1200}
        height={630}
        className="rounded-lg mb-8 object-cover"
      />
      <div className="prose prose-lg prose-invert max-w-none">{content}</div>
      <div className="mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-semibold mb-4">Citations</h2>
        <ol className="list-decimal list-inside space-y-2">
          {citations.map((citation) => (
            <li key={citation.id}>
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {citation.text}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.id}`}
                className="block p-4 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
              >
                <h3 className="font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">Share:</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleShare("facebook")}
          >
            <Facebook className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleShare("twitter")}
          >
            <Twitter className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleShare("linkedin")}
          >
            <LinkedIn className="w-4 h-4" />
          </Button>
          <span className="animate-pulse">
            <ArrowRight className="w-4 h-4 text-primary" />
          </span>
        </div>
      </div>
      {author && (
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
          <div className="flex items-center">
            <Image
              src={`/images/authors/${author
                .toLowerCase()
                .replace(" ", "-")}.jpg`}
              alt={author}
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{author}</h3>
              <p className="text-muted-foreground">{authorBio}</p>
            </div>
          </div>
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            datePublished: date,
            dateModified: date,
            author: {
              "@type": "Person",
              name: author,
            },
            image: featuredImage,
            publisher: {
              "@type": "Organization",
              name: "Nitric Boost Ultra",
              logo: {
                "@type": "ImageObject",
                url: "https://www.nitricboostreview.com/logo.png",
              },
            },
            description: metadata?.description || "",
          }),
        }}
      />
    </article>
  );
}
