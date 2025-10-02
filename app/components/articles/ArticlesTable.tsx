import { Link, Form } from "@remix-run/react";
import { formatDate, getRelativeTime } from "~/lib/utils";

type Article = {
  id: string;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  children: { id: string }[];
};

interface ArticlesTableProps {
  articles: Article[];
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  if (articles.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-12 text-center text-gray-500">
          No articles found.{" "}
          <Link to="/articles/new" className="text-blue-600 hover:underline">
            Create your first article
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <Link
                      to={`/articles/${article.id}`}
                      className="text-sm font-medium text-gray-900 hover:text-blue-600"
                    >
                      {article.title}
                    </Link>
                    {article.children.length > 0 && (
                      <span className="text-xs text-gray-500">
                        {article.children.length} child article
                        {article.children.length > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {formatDate(article.createdAt)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {getRelativeTime(article.updatedAt)}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                  <Link
                    to={`/editor?article=${article.id}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </Link>
                  <Form
                    method="post"
                    action={`/articles/${article.id}/delete`}
                    className="inline"
                  >
                    <button
                      type="submit"
                      className="text-red-600 hover:text-red-900"
                      onClick={(e) => {
                        if (
                          !confirm(
                            "Are you sure you want to delete this article?"
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Delete
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{articles.length}</span> article
          {articles.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
