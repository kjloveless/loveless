import { type PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component, route }: PageProps) {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>loveless</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-slate-600">
        <Header active={route} />
        <main class="flex flex-col items-center min-h-screen">
          <div class="max-w-screen-md m-auto flex flex-col items-center justify-center">
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
        </main>
      </body>
      <Footer />
    </html>
  );
}
