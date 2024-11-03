import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";

import { type NavItem } from "../types/Nav.ts";

import { TbMenu, TbX } from "@preact-icons/tb";
import { SiteConfig } from "../config/site.ts";

import Link from "./Link.tsx";

import { buttonVariants } from "../components/Button.tsx";
import { Icons } from "../components/Icons.tsx";
import { ThemeToggle } from "./ThemeToggle.tsx";
import { cn } from "../utils/mod.ts";

interface Props {
  children?: ComponentChildren;
  items?: NavItem[];
}

export default function SiteHeader({ children, items }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? TbX : TbMenu;

  const links = (
    <nav className="flex items-center gap-4 md:gap-1">
      <Link href={SiteConfig.links.github} target="_blank" rel="noreferrer">
        <div className={buttonVariants({ size: "sm", variant: "ghost" })}>
          <Icons.github className="size-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <ThemeToggle />
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
          {children}
          <div>
            <div className="block md:hidden">
              <MenuIcon
                aria-label="Menu"
                class="cursor-pointer"
                size={24}
                onClick={() => setShowMenu((m) => !m)}
              />
            </div>
            <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
              {links}
            </div>
          </div>
        </div>
      </header>
      {showMenu && (
        <div
          className="fixed top-16 z-30 w-full overflow-hidden border-b bg-background/80 transition-transform duration-500 md:hidden"
          aria-hidden={!showMenu}
        >
          <div className="container flex h-full flex-col items-center justify-stretch px-4 pb-2">
            <nav className="mb-2 flex w-full flex-col items-stretch gap-1 border-b py-2">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={buttonVariants({
                        variant: "ghost",
                        className:
                          "w-full !justify-start text-left font-semibold text-muted-foreground",
                      })}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.title}
                    </Link>
                  ),
              )}
            </nav>
            {links}
          </div>
        </div>
      )}
      {/* Backdrop */}
      <div
        aria-hidden
        className={cn(
          "fixed inset-0 z-20 transition-all duration-700 md:hidden",
          showMenu ? "backdrop-blur-md" : "pointer-events-none",
        )}
        onClick={() => setShowMenu(false)}
      />
    </>
  );
}
