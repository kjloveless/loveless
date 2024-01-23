import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hi Mom!");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <>
      <h3 class="text-xl font-bold">1/20/2024</h3>
      {/* <p>This is the about page.</p> */}
    </>
  );
}