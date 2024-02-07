import { Handlers } from "$fresh/server.ts";
import Board from "@/islands/TicTacToe2.tsx"

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
      <p>Still working on some things... Visit again :)</p>
      <div class="flex flex-row">
        <Board />
      </div>
    </>
  );
}
