import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as jokeHandler } from "./api/joke.ts";

interface Joke {
  text: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const res = await jokeHandler(req, ctx);
    const joke = await res.text();
    return ctx.render(joke);
  },
};

export default function Home({ data }: PageProps<Joke>) {
  return (
    <>
      <p>Welcome to my site. Look around!</p>
      { data && <p class="flex items-center">{ data }</p> }
      <div
        data-video="RW34u1KxGC4"
        data-autoplay="0"
        data-loop="0"
        id="youtube-audio"
      >
      </div>
      <script src="https://www.youtube.com/iframe_api"></script>
      <script src="/yt.js"></script>
    </>
  );
}
