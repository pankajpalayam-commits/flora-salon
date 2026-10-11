import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { blogPosts } from "@/lib/data/blog";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return buildMetadata({
      title: "Post Not Found",
      description: "This blog post could not be found.",
      path: `/blog/${params.slug}`,
    });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogPostingSchema(post)) }}
      />
      <article className="pt-40 pb-24 md:pt-48 md:pb-32">
        <Container className="max-w-3xl">
          <p className="text-sm text-flora-muted mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.updated && post.updated !== post.date && (
              <>
                {" · Updated "}
                <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}
          </p>
          <h1 className="text-h1 mb-8">{post.title}</h1>
          <div className="relative mb-10 h-64 w-full overflow-hidden rounded-xl md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <div className="prose-flora space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg text-flora-grey-dark leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-flora-grey-light py-20">
          <Container>
            <h2 className="text-h3 font-display mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <Card className="overflow-hidden">
                    <div className="relative h-40 w-full">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-medium text-flora-black">
                        {related.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
