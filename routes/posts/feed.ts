import { Handlers } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { Feed, type Item as FeedItem } from "feed";

export const handler: Handlers<Post[]> = {
  async GET(req, _ctx) {
    const posts = await getPosts();
    const url = new URL(req.url);
    const origin = url.origin;
    const copyright = `Copyright ${new Date().getFullYear()} ${origin}`;
    const feed = new Feed({
      title: "Posts",
      description: "a stream of bytes",
      id: `${origin}/posts/feed`,
      link: `${origin}/posts/feed`,
      language: "en",
      favicon: `${origin}/favicon.ico`,
      copyright: copyright,
      generator: "Feed (https://github.com/jpmonette/feed) for loveless",
      feedLinks: {
        atom: `${origin}/posts/feed`,
      },
    });

    posts.map((post) => {
      const item: FeedItem = {
        id: `${origin}/posts/${post.title}`,
        title: post.title,
        description: post.snippet,
        date: post.publishedAt,
        link: `${origin}/posts/${post.slug}`,
        copyright,
        published: post.publishedAt,
      };
      feed.addItem(item);
    });

    const atomFeed = feed.atom1();
    return new Response(atomFeed, {
      headers: {
        "content-type": "application/atom+xml; charset=utf-8",
      },
    });
  },
};