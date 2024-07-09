// js/Pages/Category.jsx

import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';
import CategoryList from '../Components/CategoryList';
import CategoryForm from '../Components/CategoryForm';

const Category = () => {
  const { categories } = usePage().props; // Fetch categories from props

  const [editing, setEditing] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  const handleEdit = (category) => {
    setEditCategory(category);
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditCategory(null);
    setEditing(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="my-6">
          <h1 className="text-2xl font-semibold mb-4">Categories</h1>
          {editing ? (
            <CategoryForm
              category={editCategory}
              onCancelEdit={handleCancelEdit}
            />
          ) : (
            <CategoryList categories={categories} onEdit={handleEdit} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
