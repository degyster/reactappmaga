import React from 'react';
import s from './ShoppingCart.module.css';
import Counter from '../../UI/Counter/Counter';
import Cross from '../../img/ic x.svg';
import { useDispatch } from 'react-redux';
import { changeCountAction, deleteFromBasketAction } from '../../Store/shoppingCartReducer';

export default function BasketListItem({ id, title, price, image, discountPrice, count }) {

    const dispatch = useDispatch();

    const handleCountChange = (operation, productId) => {
        if (operation === '-') {
            dispatch(changeCountAction(productId, -1));
        } else if (operation === '+') {
            dispatch(changeCountAction(productId, 1));
        }
    };

    return (
        <div className={s.basketListItem}>
            <img src={image} alt={title} />
            <div className={s.info}>
                <p>{title}</p>
                <div className={s.counterPrice}>
                    <Counter
                        id={id}
                        count={count}
                        onChange={count < 1 && dispatch(deleteFromBasketAction(id))}
                        operations={handleCountChange}
                    />
                    {discountPrice ? (
                        <div className={s.prices}>
                            <h3>${discountPrice}</h3>
                            <p>${price}</p>
                        </div>
                    ) : (
                        <div className={s.prices}>
                            <h3>${price}</h3>
                        </div>
                    )}
                </div>
            </div>
            <img 
                src={Cross} 
                alt="remove item" 
                onClick={() => dispatch(deleteFromBasketAction(id))} 
            />
        </div>
    );
}
