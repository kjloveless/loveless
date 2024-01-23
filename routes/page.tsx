import { Handlers, PageProps, RouteContext } from "$fresh/server.ts";

interface Data {
  foo: number;
}

export const handler: Handlers = {
  async POST(req) {
    // ... do something here
  },
  //   async GET(req, ctx) {
//     const value = await loadFooValue();
//     return ctx.render({ foo: value });
//   },
};

export default async function MyPage(req: Request, ctx: RouteContext) {
  const value = await loadFoodValue();

  // Return 404 if `value` is null
  if (value === null) {
    return ctx.renderNotFound();
  }
  // Returning a response object directly works too
  if (value === "redirect") {
    const headers = new Headers();
    headers.set("location", "/some-other-page");
    return new Response(null, {
      status: 302,
      headers,
    });
  }
  
  return <p>foo is: {value}</p>;
}