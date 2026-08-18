import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { profile } from "../data/site";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  return rss({
    title: `${profile.name} blog`,
    description: profile.summary,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: `blog/${post.id}/`,
    })),
  });
}
