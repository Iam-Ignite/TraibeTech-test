import { createRequestHandler } from "@remix-run/node";
import { installGlobals } from "@remix-run/node";

installGlobals();

export default async function handler(req, res) {
  // Dynamically import the server build
  const build = await import("../build/server/index.js");

  const requestHandler = createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  });

  return requestHandler(req, res);
}
