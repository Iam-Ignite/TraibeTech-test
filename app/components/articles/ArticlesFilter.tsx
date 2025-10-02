import { Link, Form } from "@remix-run/react";

interface ArticlesFilterProps {
  categories: string[];
  currentFilter: string;
  searchValue: string;
}

export function ArticlesFilter({
  categories,
  currentFilter,
  searchValue,
}: ArticlesFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Form method="get" className="flex-1">
          <input
            type="search"
            name="search"
            placeholder="Filter by title or category..."
            defaultValue={searchValue}
            className="input-field"
          />
        </Form>

        <div className="flex gap-2 flex-wrap">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentFilter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/?filter=${encodeURIComponent(cat)}`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentFilter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
