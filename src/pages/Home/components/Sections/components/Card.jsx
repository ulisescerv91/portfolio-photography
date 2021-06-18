import React from 'react'
import  './Card.scss'
export default function Card(props) {
    const {bgImg} = props;
    return (
        <div className='card' style={{ backgroundImage: `url(${bgImg})` }}>
            card
        </div>
    )
}
