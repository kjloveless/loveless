import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <p>Welcome to my site. Look around!</p>
      <div
        data-video="RW34u1KxGC4"
        data-autoplay="1"
        data-loop="1"
        id="youtube-audio"
      >
      </div>
      <script src="https://www.youtube.com/iframe_api"></script>
      <script src="/yt.js"></script>
    </>
  );
}
