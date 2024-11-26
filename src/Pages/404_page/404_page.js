import React from 'react';
import s from './404_page.module.css';
import { useNavigate } from 'react-router-dom';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';

export default function Error() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className={s.notFoundPage}>
            <div className={s.error}></div>
            <h2>Page not Found</h2>
            <p>
                We’re sorry, the page you requested could not be found.
                <br />
                Please go back to the homepage.
            </p>
            <ButtonUniversal 
                onClick={handleGoHome} 
                title="Go home" 
                color="green" 
            />
        </div>
    );
}
