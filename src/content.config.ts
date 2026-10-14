import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    titleLines: z.array(z.string()),
    category: z.string(),
    period: z.string(),
    tools: z.array(z.string()),
    excerpt: z.string(),
    heroImage: z.string(),
    thumbnail: z.string(),
    gallery: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    seoTitle: z.string().optional(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = { works };
