import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `https://www.${site.domain}/`, changeFrequency: "monthly", priority: 1 }];
}
