import { signal } from "@preact/signals";

import { Button } from "../components/Button.tsx";
import { Icons } from "../components/Icons.tsx";

export const theme = signal("dark");

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        theme.value = theme.value === "light" ? "dark" : "light";
        if (theme.value === "light") {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
      }}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
