import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { getDomain } from "../utils/mod.ts";

export default function Link(
  { href, ...props }: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  if (
    IS_BROWSER && typeof href === "string" && typeof globalThis !== "undefined"
  ) {
    const { domain, subdomain } = getDomain(globalThis.location?.hostname);
    if (subdomain) {
      return <a href={`https://${subdomain}.${domain}`} />;
    }
  }

  return <a href={href} {...props} />;
}
