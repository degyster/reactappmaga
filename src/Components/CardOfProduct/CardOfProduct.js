import { addToCartNewItemAction } from '../../Store/shoppingCartReducer';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';
import s from './CardOfProduct.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../App';

function CardOfProduct({ img, title, id, price, discount_price }) {
  const dispatch = useDispatch();
  const [sentState, setSentState] = useState('Add to cart');

  let isDiscount = false;
  let OldPrice = price;
  let ActualPrice = price;

  if (discount_price !== null) {
    isDiscount = true;
    ActualPrice = discount_price;
  }

  const discountPercentage = '-' + Math.ceil(((price - discount_price) / price) * 100) + '%';

  return (
    <div className={s.CardWrap} style={{ position: 'relative' }}>
      <Link to={'/product/' + id}>
        <img src={`${BASE_URL + img}`} alt={title} />
        
        {isDiscount && <div className={s.ProductCard_Sale}>{discountPercentage}</div>}

        <div className={s.ProductCard_InfoBox}>
          <p className={s.ProductCard_Name}>{title}</p>
          <div className={s.ProductCard_PriceBox}>
            <div className={s.ProductCard_Price_Actual}>${ActualPrice}</div>
            {isDiscount && <div className={s.Price_Old}>${OldPrice}</div>}
          </div>
        </div>
      </Link>
      <ButtonUniversal
        type={'normal'}
        className={s.addToCartButton}
        style={{
          height: '50px'
        }}
        title={sentState}
        textColor={'white'}
        color={'green'}
        onClick={(e) => {
          e.preventDefault();
          
          dispatch(addToCartNewItemAction({
            id: +id,
            title: title,
            price: price,
            discount_price: discount_price,
            count: 1,
            image: BASE_URL + img
          }));
          setSentState('Added');
          setTimeout(() => {
            setSentState('Add to cart');
          }, 200);
        }}
      />
    </div>
  );
}

export default CardOfProduct;
