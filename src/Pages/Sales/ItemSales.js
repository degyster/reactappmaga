import React from 'react';
import s from './Sales.module.css';
import { BASE_URL } from '../../App';

export default function ItemSales({ image, id, title, type, price, discount }) {
  const isSalesType = type === 'sales';

  return (
    <div className={`${s.SalesCard} ${isSalesType ? s.salesCategory : ''}`} key={id}>
      <div className={s.percent}>{'-' + Math.ceil(((price - discount) / price) * 100) + '%'}</div>
      <img src={`${BASE_URL}${image}`} alt={title} className={`${s.img}`} />
      <p>{title}</p>
      {isSalesType && (
        <div className={s.PriceBox}>
          <div className={s.discount}>${discount}</div>
          <div className={s.price}>${price}</div>
        </div>
      )}
    </div>
  );
}
