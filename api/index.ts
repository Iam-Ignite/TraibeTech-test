import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createRequestHandler } from "@remix-run/node";
import { installGlobals } from "@remix-run/node";

installGlobals();

export const config = {
  runtime: 'nodejs20.x',
  includeFiles: ['node_modules/.prisma/client/**']
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Dynamically import the server build
  const build = await import("../build/server/index.js");

  const requestHandler = createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  });

  return requestHandler(req, res);
}
