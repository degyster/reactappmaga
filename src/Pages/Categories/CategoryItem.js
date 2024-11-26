import React from 'react';
import s from './CategoriesPage.module.css';
import { BASE_URL } from '../../App';

export default function CategoryItem({ image, id, title }) {
    return (
        <div className={s.categoryItem} key={id}>
            <img src={`${BASE_URL}${image}`} alt={title} className={s.img} />
            <p>{title}</p>
        </div>
    );
}
