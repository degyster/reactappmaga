import React, { useState } from 'react';
import s from './Products.module.css';
import SalePercent from '../../UI/SalePercent/SalePercent';
import { useDispatch } from 'react-redux';
import { addToCartNewItemAction } from '../../Store/shoppingCartReducer';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';
import { BASE_URL } from '../../App';

export default function ProductListItem({ id, title, image, price, discontPrice }) {
    const dispatch = useDispatch();
    const [sentState, setSentState] = useState('Add to cart');

    function showSalePercent() {
        if (discontPrice !== null) {
            return <SalePercent price={price} discountPrice={discontPrice} />;
        }
    }

    return (
        <div className={`${s.productListItem} ${s.productItemEnhanced}`}>
            <div className={`${s.salePercentContainer} ${discontPrice ? s.saleActive : ''}`}>
                {showSalePercent()}
            </div>
            <div className={`${s.imgContainer}`}>
                <img 
                    src={`${BASE_URL}${image}`} 
                    alt={title} 
                    className={`${s.img} ${s.imgTransition}`} 
                />
                <div className={`${s.buttonContainer}`}>
                    <ButtonUniversal
                        type={'normal'}
                        className={`${s.addToCartButton} ${sentState === 'Added' ? s.addedState : ''}`}
                        title={sentState}
                        textColor={'white'}
                        color={'green'}
                        onClick={(e) => {
                            e.preventDefault();
                            setSentState('Added');
                            dispatch(addToCartNewItemAction({
                                id: +id,
                                title: title,
                                price: price,
                                discount_price: discontPrice,
                                count: 1,
                                image: image
                            }));
                            setTimeout(() => {
                                setSentState('Add to cart');
                            }, 200);
                        }}
                    />
                </div>
            </div>
            <p className={`${s.container} ${s.productTitle}`}>{title}</p>
            {discontPrice == null ? (
                <h3 className={`${s.price}`}>${price}</h3>
            ) : (
                <div className={`${s.prices}`}>
                    <h3 className={`${s.discountPrice}`}>${discontPrice}</h3>
                    <p className={`${s.oldPrice}`}>${price}</p>
                </div>
            )}
        </div>
    );
}
