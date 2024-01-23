import Countdown from "../islands/Coutdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getSeconds() + 1);
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}
