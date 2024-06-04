"use client";

import { useTheme } from "next-themes";
import { useTransition } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [_, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === "dark" ? "light" : "dark");
        });
      }}
    >
      <Icons.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
