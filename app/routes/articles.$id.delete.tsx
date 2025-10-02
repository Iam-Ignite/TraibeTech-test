import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "~/lib/db.server";
import { requireAuth } from "~/lib/auth.server";

export async function action({ params, request }: ActionFunctionArgs) {
  await requireAuth(request);

  await prisma.article.delete({
    where: { id: params.id },
  });

  return redirect("/");
}
