import React from 'react';
import s from './ShoppingCart.module.css';
import BasketListItem from './ShoppnigCartPageItem';
import { useSelector } from 'react-redux';

export default function ShoppingCartList() {
    const shopping_cart = useSelector((store) => store.shopping_cart);

    if (shopping_cart.length === 0) {
        return <div className={s.emptyCart}>Your cart is empty</div>;
    }

    return (
        <div className={`${s.basketList}`}>
            {shopping_cart.map((el) => (
                <BasketListItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    price={el.price}
                    image={el.image}
                    discountPrice={el.discount_price}
                    count={el.count}
                />
            ))}
        </div>
    );
}
