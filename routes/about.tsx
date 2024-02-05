import { Handlers } from "$fresh/server.ts";
import TicTacToe from "../islands/TicTacToe.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hi Mom!");
    return resp;
  },
};

export default function AboutPage() {
  const birthday = new Date(1994, 2, 21);
  // const birthday = Temporal.PlainMonthDay.from("03-21");
  // const birthdayIn2030 = birthday.toPlainDate({ year: 1994 });

  return (
    <>
      <h3 class="text-xl font-bold">{birthday.toLocaleDateString()}</h3>
      <p>Still working on some things... Visit again :)</p>
      <TicTacToe />
      {/* <p>This is the about page.</p> */}
    </>
  );
}
