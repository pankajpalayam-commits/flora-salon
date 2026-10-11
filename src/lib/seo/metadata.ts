import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  /**
   * Use the title exactly as given (no " | FLORA" suffix from the root
   * layout's title template). Only the home page needs this.
   */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  // The root layout's template ("%s | FLORA") adds the suffix to <title>;
  // social tags don't go through the template, so they get it here.
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.shortName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
