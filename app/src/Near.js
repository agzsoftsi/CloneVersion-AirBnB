import React from 'react';
import './Near.css'

function Near({ src, place, time }) {
    return (
        <div className='near'>
            
            <img src={src} alt="" />
            <div className="near__info">
                <h3>{place}</h3>
                <h4>{time}</h4>
            </div>
        </div>
    )
}

export default Near