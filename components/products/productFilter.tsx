'use client'
type ProductFilterProps = {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
    sort: string
    onSortChange: (value: string) => void
}

export default function ProductFilter({
    categories,
    activeCategory,
    onCategoryChange,
    sort,
    onSortChange,
}: ProductFilterProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                            activeCategory === category
                                ? 'bg-indigo-500 text-white border-indigo-500'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Sort by</span>
                <select
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700"
                >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>
        </div>
    )
}
