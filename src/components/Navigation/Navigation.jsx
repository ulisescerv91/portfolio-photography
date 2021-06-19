import React from 'react'
import './Navigation.scss';

export default function Navigation() {
    return (
        <nav className='Navigation'>
            <div className='Navigation__shadow'></div>
            <div className='Navigation__character'>
                <p>
                    Ulises Cervantes
                </p>
            </div>
            <div className='Navigation__burgerMenu'>X</div>
        </nav>
    )
}
