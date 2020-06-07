import React from "react";

const Categories = ({ handleCategoryChoose, category }) => {
  const categories = [
    { name: "animal", label: "Animal", id: 1, onFocus: false },
    { name: "career", label: "Career", id: 2, onFocus: false },
    { name: "celebrity", label: "Celebrity", id: 3, onFocus: false },
    { name: "dev", label: "Dev", id: 4, onFocus: false },
  ];

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          type="button"
          value={category.name}
          key={category.id}
          className="ctgr-btn"
          onClick={handleCategoryChoose}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Categories;
