import React, { useState } from 'react';
import s from './FormForDiscount.module.css';
import { useForm } from 'react-hook-form';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';
import { BASE_URL } from '../../App';
import Input from '../../UI/Input/Input';

export default function FormForDiscount() {
    const [discountButtonText, setDiscountButtonText] = useState('Get a discount');
    const [isSubmitting, setIsSubmitting] = useState(false);

    function changeInnerText(text) {
        setDiscountButtonText(text);
    }

    let {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: 'onSubmit' });

    const onSubmit = async (data) => {
        reset();
        changeInnerText('Request submitted');
        setIsSubmitting(true);

        try {
            let response = await fetch(`${BASE_URL}sale/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const res = await response.json();
            alert(`${data.name}, your ${res.message}`);
        } catch (error) {
            alert('There was an error processing your request. Please try again.');
        } finally {
            setIsSubmitting(false);
            changeInnerText('Get a discount');
        }
    };

    return (
        <div className={`${s.FormForDiscount}`}>
            <h2>5% off on the first order</h2>
            <div className={`${s.Content}`}>
                <div className={`${s.Hands}`}></div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${s.Form}`}>
                    <Input 
                        {...register('name', {
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
                    {errors.name && <p className={`${s.ErrorText}`}>{errors.name.message}</p>}

                    <Input 
                        {...register('phone', {
                            required: 'Phone number should be filled',
                            pattern: {
                                value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
                                message: 'Invalid number format'
                            }
                        })} 
                    />
                    {errors.phone && <p className={`${s.ErrorText}`}>{errors.phone.message}</p>}

                    <Input 
                        {...register('email', {
                            required: 'EMail should be filled',
                            pattern: {
                                value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                                message: 'Invalid email format'
                            }
                        })} 
                    />
                    {errors.email && <p className={`${s.ErrorText}`}>{errors.email.message}</p>}

                    <ButtonUniversal 
                        title={discountButtonText} 
                        color={'green'} 
                        type={'disc'}
                        disabled={isSubmitting}
                    />
                </form>
            </div>
        </div>
    );
}
