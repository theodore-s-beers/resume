import { resume } from "./resume";

export default {
  port: 8080,

  fetch(req) {
    const resHeaders = new Headers({
      "Content-Type": "application/json; charset=utf-8",
      "TSB-Pitch": "I'd love to work on cool projects with you!",
    });

    const url = new URL(req.url);
    if (url.pathname === "/raw.json") {
      return new Response(JSON.stringify(resume, null, 2), {
        headers: resHeaders,
      });
    }

    const accept = req.headers.get("Accept");
    if (accept?.includes("application/json") || accept === "*/*") {
      return new Response(JSON.stringify(resume, null, 2), {
        headers: resHeaders,
      });
    }

    resHeaders.set("Content-Type", "text/html; charset=utf-8");
    return new Response(Bun.file("./fallback.html"), { headers: resHeaders });
  },
} satisfies Bun.Serve.Options<undefined>;
