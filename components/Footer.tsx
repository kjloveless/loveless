import HeartExclamationIcon from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/heart-exclamation.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function Footer() {
  const menus = [
    {
      title: "Pages",
      children: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Posts", href: "/posts" },
        { name: "Games", href: "/games" },
      ],
    },
    {
      title: "Social",
      children: [
        { name: "discord", href: "https://discordapp.com/users/damnloveless" },
        { name: "bluesky", href: "https://bsky.app/profile/loveless.dev" },
        { name: "instagram", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-white flex flex-col sm:flex-row w-full gap-8 sm:gap-16 p-8 mt-auto bottom-0 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <HeartExclamationIcon class="inline-block" aria-hidden="true" />
          <div class="font-bold text-2xl">
            loveless
          </div>
        </div>
        <div class="text-gray-500">
          software developer
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a class="text-gray-500 hover:text-gray-700" href={child.href}>
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          2024 loveless
        </div>

        <a
          href="https://github.com/kjloveless"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          <BrandGithub aria-hiddenn="true" />
        </a>
      </div>
    </div>
  );
}
