import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { TbHeartBroken } from "@preact-icons/tb";

// import LazyTheater from "../islands/Theater.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <>
      <div class="flex flex-col px-4 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <TbHeartBroken class={"size-16"} />
          <h1 class="text-center text-4xl font-bold">
            welcome to my site, look around
          </h1>
          {/* <Counter count={count} /> */}
          {/* <LazyTheater className="flex justify-center m-8 size-16 md:size-8" /> */}
        </div>
      </div>
      <div className="flex shrink-0 mt-auto py-4 justify-center align-bottom bottom-0">
        <p>
          reach me at: <a href="mailto:kyle@loveless.dev">kyle@loveless.dev</a>
        </p>
      </div>
    </>
  );
}
