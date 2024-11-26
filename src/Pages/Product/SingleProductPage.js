import { useEffect, useState } from "react";
import { fetchProductById } from "../../AsyncActions/products";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../UI/Counter/Counter";
import s from './ProductPage.module.css';
import { addToCartNewItemAction } from "../../Store/shoppingCartReducer";
import { BASE_URL } from "../../App";
import ButtonUniversal from "../../UI/ButtonUniversal/ButtonUniversal";

function SingleProductPage() {
    const product = useSelector((store) => store.new);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [sentState, setSentState] = useState('Add to cart');
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(fetchProductById(id));
        document.body.scrollIntoView({ behavior: "smooth" });
    }, [dispatch, id]);

    function countOperation(oper) {
        if (oper === '-') {
            count > 1 && setCount(count - 1);
        } else if (oper === '+') {
            setCount(count + 1);
        }
    }

    return (
        <div>   
            <div className={s.ProductLayout}>
                <img className={s.img} src={`${BASE_URL + product[0]?.image}`} alt={product[0]?.title}></img>
                <div className={s.ProductInfoField}>
                    <h3 className={s.ProductName}>{product[0]?.title}</h3>
                    <div className={s.ProductCostField}>
                        <div className={s.ProductCostField_Into}>
                            <div className={s.ProductCost_New}>
                                {'$' + (product[0]?.discont_price == null ? product[0]?.price : product[0]?.discont_price)}
                            </div>
                            {product[0]?.discont_price && (
                                <div className={s.ProductCost_Old}>
                                    {'$' + (product[0]?.price)}
                                </div>
                            )}
                        </div>
                        {product[0]?.discont_price && (
                            <div className={s.DiscountPercent}>
                                {'-' + Math.ceil(((product[0]?.price - product[0]?.discont_price) / product[0]?.price) * 100) + '%'}
                            </div>
                        )}
                    </div>
                    <div className={s.ToCartAddonField}>
                        <div className={s.CounterLayout}>
                            <Counter id={id} count={count} operations={countOperation} />
                            <ButtonUniversal
                                title={sentState}
                                textColor={'white'}
                                color={'green'}
                                onClick={() => {
                                    dispatch(addToCartNewItemAction({
                                        id: +id,
                                        title: product[0]?.title,
                                        price: product[0]?.price,
                                        discount_price: product[0]?.discont_price,
                                        count: count,
                                        image: BASE_URL + product[0]?.image
                                    }));
                                    setSentState('Added');
                                    setTimeout(() => {
                                        setSentState('Add to cart');
                                    }, 500);
                                }}
                            />
                        </div>
                    </div>
                    <div className={s.DescriptionField}>
                        <h4>Description</h4>
                        <div className={s.DescriptionImport}>{product[0]?.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductPage;
