import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation, Link } from "@remix-run/react";
import { prisma } from "~/lib/db.server";
import { generateSlug } from "~/lib/utils";
import { requireAuth } from "~/lib/auth.server";
import { useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);

  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const category = formData.get("category")?.toString();
  const content = formData.get("content")?.toString();

  if (!title || !category || !content) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  const slug = generateSlug(title);

  // Check if slug already exists
  const existing = await prisma.article.findUnique({
    where: { slug },
  });

  if (existing) {
    return json(
      { error: "An article with this title already exists" },
      { status: 400 }
    );
  }

  const article = await prisma.article.create({
    data: {
      title,
      slug,
      category,
      content,
    },
  });

  return redirect(`/articles/${article.id}`);
}

export default function NewArticle() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [title, setTitle] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Create New Article</h1>
            <Link to="/" className="btn-secondary">
              Cancel
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Form method="post" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {actionData?.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{actionData.error}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-field"
                placeholder="Enter article title"
              />
              {title && (
                <p className="mt-2 text-sm text-gray-500">
                  Slug: <span className="font-mono">{generateSlug(title)}</span>
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <input
                type="text"
                id="category"
                name="category"
                required
                className="input-field"
                placeholder="e.g., Technology, Education, Design"
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={12}
                className="input-field font-mono text-sm"
                placeholder="Write your article content here..."
              />
              <p className="mt-2 text-sm text-gray-500">
                Supports plain text and basic markdown formatting
              </p>
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
              <Link to="/" className="btn-secondary">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  'Create Article'
                )}
              </button>
            </div>
          </div>
        </Form>
      </main>
    </div>
  );
}
