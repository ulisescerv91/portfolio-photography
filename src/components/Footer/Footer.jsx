import React from 'react'
import './Footer.scss'
import SocialIcons from '../SocialIcons/SocialIcons'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer__img'></div>
            <div className='Footer__topFade'></div>
            <div className='Footer__leftFade'></div>
            <div className='Footer__data'>
                <div className='Footer__data__mail'>
                    Andy
                </div>
            </div>
            <div className='Footer__credits'>
                <SocialIcons position="row"/>
            </div>
        </div>
    )
}
