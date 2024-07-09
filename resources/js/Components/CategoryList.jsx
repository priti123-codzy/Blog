// js/Components/CategoryList.jsx

import React from 'react';

const CategoryList = ({ categories, onEdit }) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="border-b border-gray-200">
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold">{category.name}</span>
              </div>
              <div>
                <button
                  onClick={() => onEdit(category)}
                  className="text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                  Edit
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
