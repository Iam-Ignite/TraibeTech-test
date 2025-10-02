import { Link } from "@remix-run/react";
import { TreeCategory } from "./TreeCategory";

type CategoryTree = {
  category: string;
  articles: Array<{
    id: string;
    title: string;
    children: Array<{ id: string; title: string }>;
  }>;
};

interface ArticleTreeSidebarProps {
  tree: CategoryTree[];
  currentArticleId?: string;
  expandedCategories: Set<string>;
  onToggleCategory: (category: string) => void;
}

export function ArticleTreeSidebar({
  tree,
  currentArticleId,
  expandedCategories,
  onToggleCategory,
}: ArticleTreeSidebarProps) {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Articles</h2>
          <Link
            to="/articles/new"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            + New
          </Link>
        </div>

        <div className="space-y-2">
          {tree.map(({ category, articles }) => (
            <TreeCategory
              key={category}
              category={category}
              articles={articles}
              currentArticleId={currentArticleId}
              isExpanded={expandedCategories.has(category)}
              onToggle={() => onToggleCategory(category)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
