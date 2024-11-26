import React from 'react';
import s from './CategoriesPage.module.css';
import CategoryList from './CategoriesList';

export default function CategoriesPage() {
    return (
        <div className={s.categoriesPage}>
            <h2>Categories</h2>
            <CategoryList count={5} />
        </div>
    );
}
