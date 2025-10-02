import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link, useSearchParams } from "@remix-run/react";
import { prisma } from "~/lib/db.server";
import { requireAuth } from "~/lib/auth.server";
import { ArticlesTable } from "~/components/articles/ArticlesTable";
import { ArticlesFilter } from "~/components/articles/ArticlesFilter";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);

  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";
    const filter = url.searchParams.get("filter") || "all";

    const articles = await prisma.article.findMany({
      where: {
        ...(search && {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { category: { contains: search, mode: "insensitive" } },
          ],
        }),
        ...(filter !== "all" && { category: filter }),
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        children: {
          select: {
            id: true,
          },
        },
      },
    });

    const categories = await prisma.article.findMany({
      distinct: ["category"],
      select: {
        category: true,
      },
    });

    return json({ articles, categories: categories.map((c) => c.category) });
  } catch (error) {
    console.error("Error loading articles:", error);
    return json({ articles: [], categories: [] });
  }
}

export default function Index() {
  const { articles, categories } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">My Articles</h1>
            <Link to="/articles/new" className="btn-primary">
              + New Article
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ArticlesFilter
          categories={categories}
          currentFilter={currentFilter}
          searchValue={searchParams.get("search") || ""}
        />

        <ArticlesTable articles={articles} />
      </main>
    </div>
  );
}
