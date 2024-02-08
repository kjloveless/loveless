import { FreshContext } from "$fresh/server.ts";
import * as base58 from "$std/encoding/base58.ts";

export const handler = (req: Request, _ctx: FreshContext): Response => {
  const listId = base58.encodeBase58(crypto.getRandomValues(new Uint8Array(8)));
  const url = new URL(req.url);
  return Response.redirect(`${url.origin}/todo/${listId}`, 302);
};
