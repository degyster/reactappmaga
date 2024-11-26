import React from 'react'
import s from './LocateButton.module.css'
import { Link } from 'react-router-dom'

export default function LocateButton({ header, link, linkText, salesRef }) {
    return (
        <div className={`${s.textandLineButton}`} ref={salesRef}>
            <h2>{header}</h2>
            <div className={`${s.lineAndButton}`}>
                <div className={`${s.line}`}></div>
                <Link to={link} onClick={() => window.scrollTo(0, 0)}>{linkText}</Link>
            </div>
        </div>
    )
}