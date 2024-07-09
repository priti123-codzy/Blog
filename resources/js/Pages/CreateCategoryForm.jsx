import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

const CreateCategoryForm = () => {
    const [name, setName] = useState('');

    const { post, errors, progress } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('category.store'), {
            name: name,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Create Category</button>
        </form>
    );
};

export default CreateCategoryForm;
