import { type PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>loveless</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header active="/" />
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Kyle Loveless</h1>
          <Component />
        </div>
      </body>
    </html>
  );
}
