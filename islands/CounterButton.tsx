import { useSignal } from "@preact/signals";

export function CounterButton() {
  const count = useSignal(0);

  function handleClick() {
    count.value++;
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
