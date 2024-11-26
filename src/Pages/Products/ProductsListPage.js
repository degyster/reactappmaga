import React from 'react';
import ProductsList from '../Sales/SalesList';
import s from './Products.module.css';

export default function ProductsListPage({ type, title }) {
  return (
    <div className={`${s.productsListPage} ${s.styledPage}`}>
      <h2 className={`${s.pageTitle} ${s.dynamicTitle}`}>{title}</h2>
      <div className={s.productsContainer}>
        <ProductsList type={type} />
      </div>
    </div>
  );
}
