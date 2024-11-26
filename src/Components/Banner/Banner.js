import React from 'react';
import s from './Banner.module.css';

const Banner = () => {
    return (
        <div className={s.AD_bar}>
            <div className={s.Overlay}></div>
            <div className={s.Discount_layout}>
                <h1 className={s.Discount_title}>Amazing Discounts<br /> on Garden Products!</h1>
                <button className={s.Discount_button}>
                    <p className={s.Discount_button_text}>Check out</p>
                </button>
            </div>
        </div>
    );
};

export default Banner;
