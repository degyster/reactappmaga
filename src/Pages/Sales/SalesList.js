import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Sales.module.css';
import { Link } from 'react-router-dom';
import { fetchAllProductsSale } from '../../AsyncActions/products';
import ItemSales from './ItemSales';

export default function SalesList({ count }) {
  const products = useSelector(store => store.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsSale());
  }, [dispatch]);

  return (
    <div className={s.SalesList}>
      {products.slice(0, count).map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <ItemSales
            image={product.image}
            id={product.id}
            title={product.title}
            type="sales"
            price={product.price}
            discount={product.discont_price}
          />
        </Link>
      ))}
    </div>
  );
}
