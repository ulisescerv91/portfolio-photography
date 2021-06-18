import React from 'react'
import Card from './components/Card'
import './Sections.scss'
export default function Sections() {

    const cards = [
        {
            img:'https://andyhardy.co/media/pages/home/e415742651-1613463733/andy-bg-560x800.jpg'
        },
        {
            img:'https://andyhardy.co/media/pages/home/6742511e44-1613463734/felan-bg-560x800.jpg'
        },
        {
            img:'https://andyhardy.co/media/pages/home/fcdbb331ce-1613463734/education-bg-560x800.jpg'
        },
        {
            img:'https://andyhardy.co/media/pages/home/6871d294a8-1613463735/presets-bg-560x800.jpg'
        }
    ]

    return (
        <div className='sections'>
            {
                cards.map( (card, index) =>{
                    return <Card bgImg={card.img} key={index}/>
                } )
            }

        </div>
    )
}
