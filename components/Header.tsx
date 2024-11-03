import SiteHeader from "../islands/SiteHeader.tsx";
import MainNav from "../components/MainNav.tsx";

import { SiteConfig } from "../config/site.ts";

export default function Header({ url }: { url: URL }) {
  return (
    <>
      <SiteHeader items={SiteConfig.mainNav}>
        <MainNav title={url.hostname} items={SiteConfig.mainNav} />
      </SiteHeader>
    </>
  );
}
