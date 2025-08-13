const CategoryButton = ({ selectedCategory, setCategory, data }) => {
  const handleCategoryFilter = () => {
    const filteredData = data.filter((onlineCourse) => {
      onlineCourse.category === onlineCourse;
    });
    setCategory(filteredData);
  };

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2">
      {["Online courses", "e-Learning platform", "Corporate training"].map(
        (value) => (
          <button
            key={value}
            onClick={() => handleCategoryFilter(value)}
            className="col-span-1 mx-4 bg-[#73BFA1] text-white poppins-semibold text-2xl px-10 py-3 rounded-lg m-5"
          >
            {value}
          </button>
        )
      )}
    </section>
  );
};

export default CategoryButton;
