import { Form } from "@remix-run/react";
import { generateSlug } from "~/lib/utils";
import { AlertMessage } from "./AlertMessage";

type CategoryTree = {
  category: string;
  articles: { id: string; title: string }[];
};

interface EditorFormProps {
  formData: {
    id: string;
    title: string;
    category: string;
    content: string;
    parentId: string;
  };
  updateField: (field: string, value: string) => void;
  isSubmitting: boolean;
  actionData?: { error?: string; success?: boolean };
  tree: CategoryTree[];
  currentArticleId?: string;
}

export function EditorForm({
  formData,
  updateField,
  isSubmitting,
  actionData,
  tree,
  currentArticleId,
}: EditorFormProps) {
  return (
    <Form
      method="post"
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
    >
      {/* Alert Messages */}
      {actionData && "error" in actionData && (
        <AlertMessage type="error" message={actionData.error} />
      )}

      {actionData && "success" in actionData && (
        <AlertMessage type="success" message="Article saved successfully!" />
      )}

      <input type="hidden" name="id" value={formData.id} />

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="input-field"
            placeholder="Enter article title"
          />
          {formData.title && (
            <p className="mt-2 text-sm text-gray-500">
              Slug:{" "}
              <span className="font-mono">{generateSlug(formData.title)}</span>
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category *
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={(e) => updateField("category", e.target.value)}
            className="input-field"
            placeholder="e.g., Technology, Education, Design"
          />
        </div>

        {/* Parent Article */}
        <div>
          <label
            htmlFor="parentId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Parent Article (Optional)
          </label>
          <select
            id="parentId"
            name="parentId"
            value={formData.parentId}
            onChange={(e) => updateField("parentId", e.target.value)}
            className="input-field"
          >
            <option value="">None (Root Article)</option>
            {tree.map(({ category, articles }) =>
              articles.map((article) => (
                <option
                  key={article.id}
                  value={article.id}
                  disabled={article.id === formData.id}
                >
                  {category} → {article.title}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={16}
            value={formData.content}
            onChange={(e) => updateField("content", e.target.value)}
            className="input-field font-mono text-sm"
            placeholder="Write your article content here..."
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <div className="flex gap-3">
            {currentArticleId && (
              <a href={`/articles/${currentArticleId}`} className="btn-secondary">
                Preview
              </a>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {formData.id ? "Saving..." : "Creating..."}
              </>
            ) : formData.id ? (
              "Save Changes"
            ) : (
              "Create Article"
            )}
          </button>
        </div>
      </div>
    </Form>
  );
}
