function CategoryFilter({
    category,
    setCategory,
    categories = []
}) {

    return (
        <select
            className="category-filter"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
        >

            <option value="All">All Categories</option>

            {categories.map((item) => (
                <option
                    key={item.strCategory}
                    value={item.strCategory}
                >
                    {item.strCategory}
                </option>
            ))}

        </select>
    );
}

export default CategoryFilter;