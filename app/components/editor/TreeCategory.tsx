import { Link } from "@remix-run/react";

type Article = {
  id: string;
  title: string;
  children: Article[];
};

interface TreeCategoryProps {
  category: string;
  articles: Article[];
  currentArticleId?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export function TreeCategory({
  category,
  articles,
  currentArticleId,
  isExpanded,
  onToggle,
}: TreeCategoryProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900">{category}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="bg-white">
          {articles.map((article) => (
            <div key={article.id}>
              <Link
                to={`/editor?article=${article.id}`}
                className={`block px-4 py-2 pl-8 text-sm hover:bg-blue-50 ${
                  currentArticleId === article.id
                    ? "bg-blue-100 text-blue-900 font-medium"
                    : "text-gray-700"
                }`}
              >
                📄 {article.title}
              </Link>

              {article.children.length > 0 && (
                <div className="bg-gray-50">
                  {article.children.map((child) => (
                    <Link
                      key={child.id}
                      to={`/editor?article=${child.id}`}
                      className={`block px-4 py-2 pl-12 text-sm hover:bg-blue-50 ${
                        currentArticleId === child.id
                          ? "bg-blue-100 text-blue-900 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      ↳ {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
