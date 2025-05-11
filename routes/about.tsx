import { TbHeartBroken } from "@preact-icons/tb";
import Link from "../islands/Link.tsx";

export default function About() {
  return (
    <div class="flex flex-col px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <TbHeartBroken className={"size-16"} />
        <h1 class="text-center text-4xl font-bold">
          software developer. dad.
        </h1>
        <h4 class="text-center text-2xl font-bold">
          i like systems and web programming. big zig and deno fan.
        </h4>
        <h2 class="text-center text-xl font-bold">
          i'm learning zig and golang. brushing up on c/c++. computer security
          enthusiast.
        </h2>
      </div>
      <p class="items-start text-l font-bold">
        some things i've built:
        <ul>
          <li>
            <Link href="https://github.com/kjloveless/blip">blip</Link>
          </li>
          <li>
            <Link href="https://github.com/kjloveless/zish">zish</Link>
          </li>
          <li>
            <Link href="https://github.com/kjloveless/ftw-cli">ftw-cli</Link>
          </li>
          <li>
            <Link href="https://github.com/kjloveless/loveless">
              loveless.dev
            </Link>
          </li>
        </ul>
      </p>
      <div className="flex shrink-0 mt-auto py-4 justify-center align-bottom bottom-0">
        <p>
          reach me at: <a href="mailto:kyle@loveless.dev">hello@turn.off.ai</a>
        </p>
      </div>
    </div>
  );
}
