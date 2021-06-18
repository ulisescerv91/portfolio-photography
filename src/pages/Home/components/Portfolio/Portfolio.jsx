import React from 'react'
import './Portfolio.scss'
import {Link} from 'react-router-dom'

export default function Portfolio() {
    return (
        <div className='portfolio'>
            
            <div className='portfolio__center'>
                
                <Link className='portfolio__center__img'></Link>
                <Link className='portfolio__center__img'></Link>
                <Link className='portfolio__center__img'></Link>
                <Link className='portfolio__center__img'></Link>

            </div>
        </div>
    )
}
