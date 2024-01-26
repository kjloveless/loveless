import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hi Mom!");
    return resp;
  },
};

export default function AboutPage() {
  const birthday = Temporal.PlainMonthDay.from("03-21");
  // const birthdayIn2030 = birthday.toPlainDate({ year: 1994 });

  return (
    <>
      <h3 class="text-xl font-bold">{birthday.toString()}</h3>
      {/* <p>This is the about page.</p> */}
    </>
  );
}