import React from 'react'
import './SocialIcons.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function SocialIcons(props) {
    const {position} = props;//Require get row o column position
    return (
        <div className='SocialIcons' >
            <div className={`SocialIcons__container ${(position === 'column')? 'column':'row'}`}  >
                <FacebookIcon  className='SocialIcons__container__item'/>
                <InstagramIcon className='SocialIcons__container__item'/>
                <YouTubeIcon className='SocialIcons__container__item'/>
            </div>
        </div>
    )
}
