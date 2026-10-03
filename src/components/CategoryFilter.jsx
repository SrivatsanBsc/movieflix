function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Action", "Sci-Fi", "Thriller", "Romance"];

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;