import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <p>Welcome to my site. Look around!</p>
      <Counter count={count} />
    </>
  );
}
