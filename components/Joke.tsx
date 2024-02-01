import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export async function Joke() {
  const joke = await (await fetch("/api/joke")).body;
  return (
    <p>
      {joke}
    </p>
  );
}
