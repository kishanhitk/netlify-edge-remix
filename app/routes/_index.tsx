import { json } from "@netlify/remix-runtime";
import { useLoaderData } from "@remix-run/react";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, s-maxage=60",
  };
}

export const loader = async () => {
  console.log("loader calling");
  return json({ date: new Date() });
};

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer noopener"
          >
            15m Quickstart Blog Tutorial Hello
          </a>
        </li>
        <h1 className="text-6xl">Time is {new Date().toTimeString()}</h1>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer noopener"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer noopener"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </main>
  );
}
