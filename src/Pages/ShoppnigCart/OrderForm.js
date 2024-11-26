import React, { useEffect, useState } from 'react'
import s from './ShoppingCart.module.css'
import { useForm } from 'react-hook-form'
import Cross from '../../img/ic x.svg'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../App'
import { resetBasketAction } from '../../Store/shoppingCartReducer'
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal'
import Input from '../../UI/Input/Input'


export default function OrderForm() {

    const shopping_cart = useSelector((store) => store.shopping_cart);
    const [discountButtonText, setDiscountButtonText] = useState('Order');
    const [openModal, setOpenModal] = useState(false);
    const overlayClassName = openModal ? `${s.overlay} ${s.overlayVisible}` : s.overlay;
    const dispatch = useDispatch();

    function changeInnerText(text) {
        setDiscountButtonText(text);
    }

    let {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({ mode: 'onSubmit' });

    const onSubmit = async (data) => {
        reset();
        let response = await fetch(`${BASE_URL}order/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        });
        const res = await response.json();
        res && setOpenModal(true);
        changeInnerText('The Order is Placed');
    };

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openModal]);

    return (
        <div className={`${s.orderForm}`}>
            <h2>Order details</h2>
            <div className={`${s.orderInfo}`}>
                <h3>{shopping_cart.reduce((total, item) => total + item.count, 0)} items total</h3>
                <h2>${shopping_cart.reduce((total, item) => total + ((item.discount_price !== null ? item.discount_price : item.price) * item.count), 0).toFixed(2)}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`${s.form}`}>
                <Input 
                    {...register('Name', {
                        required: 'Name should be filled',
                        minLength: {
                            value: 3,
                            message: 'Name should have at least 3 characters'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Name should not exceed 20 characters'
                        }
                    })}
                />
                {errors.Name && <p className={`${s.errortext}`}>{errors.Name.message}</p>}
                
                <Input 
                    {...register('Phone', {
                        required: 'Phone number should be filled',
                        pattern: {
                            value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
                            message: 'Invalid number format'
                        }
                    })}
                />
                {errors.Phone && <p className={`${s.errortext}`}>{errors.Phone.message}</p>}
                
                <Input 
                    {...register('Email', {
                        required: 'EMail should be filled',
                        pattern: {
                            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                            message: 'Invalid email format'
                        }
                    })}
                />
                {errors.Email && <p className={`${s.errortext}`}>{errors.Email.message}</p>}
                
                <ButtonUniversal 
                    discountButtonText={discountButtonText} 
                    onClick={handleSubmit(onSubmit)} 
                    disabled={!isValid}
                />
            </form>
            
            {openModal && (
                <>
                    <div className={overlayClassName}>
                        <div className={`${s.modal}`}>
                            <div className={`${s.modalText}`}>
                                <h3>Congratulations!</h3>
                                <p>Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.</p>
                            </div>
                            <img 
                                src={Cross} 
                                alt='close' 
                                onClick={() => {
                                    setOpenModal(false);
                                    dispatch(resetBasketAction());
                                }} 
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
