import { type PageProps } from "$fresh/server.ts";
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
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
          <nav>
            <ol>
              <li class="crumb"><a href="/">loveless</a></li>
            </ol>
          </nav>

        </div>
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class="text-4xl font-bold">Kyle Lovless</h1>
            <Component />
          </div>
      </body>
    </html>
  );
}
