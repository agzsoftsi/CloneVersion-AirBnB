import React from 'react';
import './Become.css'

function Become({ src, title, description, price }) {
    return (
        <div className='Become'>
            <img src={src} alt="" />
            <div className="Become__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Become