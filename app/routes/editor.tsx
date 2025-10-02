import {
  json,
  redirect,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { useLoaderData, useActionData, useNavigation, Link } from "@remix-run/react";
import { prisma } from "~/lib/db.server";
import { generateSlug } from "~/lib/utils";
import { requireAuth } from "~/lib/auth.server";
import { useState, useEffect } from "react";
import { ArticleTreeSidebar } from "~/components/editor/ArticleTreeSidebar";
import { EditorForm } from "~/components/editor/EditorForm";

type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type ArticleWithChildren = Article & {
  children: Article[];
};

type CategoryTree = {
  category: string;
  articles: ArticleWithChildren[];
};

type ActionResponse = { error: string } | { success: true; article: Article };

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);

  const url = new URL(request.url);
  const articleId = url.searchParams.get("article");

  const articles = await prisma.article.findMany({
    orderBy: [{ category: "asc" }, { title: "asc" }],
    include: {
      children: { orderBy: { title: "asc" } },
    },
  });

  const categoryMap = new Map<string, ArticleWithChildren[]>();

  articles.forEach((article) => {
    if (!categoryMap.has(article.category)) {
      categoryMap.set(article.category, []);
    }
    if (!article.parentId) {
      categoryMap.get(article.category)!.push(article);
    }
  });

  const tree: CategoryTree[] = Array.from(categoryMap.entries()).map(
    ([category, articles]) => ({ category, articles })
  );

  const currentArticle = articleId
    ? await prisma.article.findUnique({ where: { id: articleId } })
    : null;

  return json({ tree, currentArticle });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);

  const formData = await request.formData();
  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const category = formData.get("category")?.toString();
  const content = formData.get("content")?.toString();
  const parentId = formData.get("parentId")?.toString() || null;

  if (!title || !category || !content) {
    return json<ActionResponse>(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const slug = generateSlug(title);

  if (id) {
    const existing = await prisma.article.findFirst({
      where: { slug, NOT: { id } },
    });

    if (existing) {
      return json<ActionResponse>(
        { error: "An article with this title already exists" },
        { status: 400 }
      );
    }

    const article = await prisma.article.update({
      where: { id },
      data: { title, slug, category, content, parentId },
    });

    return json<ActionResponse>({ success: true, article });
  } else {
    const existing = await prisma.article.findUnique({ where: { slug } });

    if (existing) {
      return json<ActionResponse>(
        { error: "An article with this title already exists" },
        { status: 400 }
      );
    }

    const article = await prisma.article.create({
      data: { title, slug, category, content, parentId },
    });

    return redirect(`/editor?article=${article.id}`);
  }
}

export default function Editor() {
  const { tree, currentArticle } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [formData, setFormData] = useState({
    id: currentArticle?.id || "",
    title: currentArticle?.title || "",
    category: currentArticle?.category || "",
    content: currentArticle?.content || "",
    parentId: currentArticle?.parentId || "",
  });

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (currentArticle) {
      setFormData({
        id: currentArticle.id,
        title: currentArticle.title,
        category: currentArticle.category,
        content: currentArticle.content,
        parentId: currentArticle.parentId || "",
      });
    }
  }, [currentArticle]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Article Editor</h1>
            <Link to="/" className="btn-secondary text-sm">
              ← Back to List
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <ArticleTreeSidebar
          tree={tree}
          currentArticleId={currentArticle?.id}
          expandedCategories={expandedCategories}
          onToggleCategory={toggleCategory}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            <EditorForm
              formData={formData}
              updateField={updateField}
              isSubmitting={isSubmitting}
              actionData={actionData}
              tree={tree}
              currentArticleId={currentArticle?.id}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
