const CategoryButton = ({ selectedCategory, setCategory, data }) => {
  const handleCategoryFilter = () => {
    const filteredData = data.filter((onlineCourse) => {
      onlineCourse.category === onlineCourse;
    });
    setCategory(filteredData);
  };

  return (
    <section className="flex justify-between">
      {["Online courses", "e-Learning platform", "Corporate training"].map(
        (value) => (
          <button
            key={value}
            onClick={() => handleCategoryFilter(value)}
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          >
            {value}
          </button>
        )
      )}
    </section>
  );
};

export default CategoryButton;
