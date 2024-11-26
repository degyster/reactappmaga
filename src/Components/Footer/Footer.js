import React from 'react';
import Map from './Map';
import s from './Footer.module.css';
import inst from '../../img/ic-instagram.svg';
import whatsapp from '../../img/ic-whatsapp.svg';

const ContactCard = ({ title, content }) => (
    <div className={`${s.card}`}>
        <p>{title}</p>
        <h3>{content}</h3>
    </div>
);

const SocialLinks = () => (
    <div className={`${s.links}`}>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <img src={inst} alt='Instagram' />
        </a>
        <a href='https://www.whatsapp.com/?lang=ru_RU' target='_blank' rel='noopener noreferrer'>
            <img src={whatsapp} alt='WhatsApp' />
        </a>
    </div>
);

export default function Footer() {
    return (
        <div className={`${s.footer}`}>
            <h2>Contact</h2>
            <div className={`${s.grid}`}>
                <ContactCard title="Phone" content="+1 (123) 456-7890" />
                <div className={`${s.card}`}>
                    <p>Socials</p>
                    <SocialLinks />
                </div>
                <ContactCard title="Address" content="1234 Elm St, Springfield, IL, 62704, USA" />
                <ContactCard title="Working hours" content="24 hours a day" />
            </div>
            <Map />
        </div>
    );
}
