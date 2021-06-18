import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import  './Card.scss'
export default function Card(props) {
    const {bgImg} = props;
    return (
        <div className='card' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='card__shadow'></div>
            <div className='card__link'>
                Some text <span> <ArrowForwardIcon/> </span> 
            </div>
        </div>
    )
}
