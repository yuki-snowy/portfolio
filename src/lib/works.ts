import type { CollectionEntry } from "astro:content";

export function sortWorks(works: CollectionEntry<"works">[]) {
  return [...works].sort((a, b) => a.data.order - b.data.order);
}

export function featuredWorks(works: CollectionEntry<"works">[]) {
  return sortWorks(works).filter((work) => work.data.featured);
}
