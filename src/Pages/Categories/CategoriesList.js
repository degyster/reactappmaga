import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './CategoriesPage.module.css';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';
import { fetchCategoriesList } from '../../AsyncActions/categories';

export default function CategoryList({ count }) {
    const categories = useSelector(store => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList());
    }, [dispatch]);

    return (
        <div className={s.categoriesList}>
            {categories.slice(0, count).map(elem => (
                <Link to={`/categories/${elem.id}`} key={elem.id}>
                    <CategoryItem image={elem.image} id={elem.id} title={elem.title} />
                </Link>
            ))}
        </div>
    );
}
