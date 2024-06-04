import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex flex-row items-center gap-4">
        <Link href="/" className="text-lg font-semibold">
          Boilerplate
        </Link>
        <Link href="/example" className="text-sm">
          /Example
        </Link>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  );
}
