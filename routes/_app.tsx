import { type PageProps } from "$fresh/server.ts";

import Header from "../components/Header.tsx";

import { theme } from "../islands/ThemeToggle.tsx";

export default function App({ Component, url }: PageProps) {
  return (
    <html class={theme.value}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{url.hostname}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header url={url} />
        <Component />
      </body>
    </html>
  );
}
