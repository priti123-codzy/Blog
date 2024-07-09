import React, { useEffect, useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const CategoriesList = ({ categories }) => {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <InertiaLink href={route('category.show', { id: category.id })}>{category.name}</InertiaLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;
