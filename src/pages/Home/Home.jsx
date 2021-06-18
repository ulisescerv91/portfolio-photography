import React from 'react'
import Paralax from './components/Paralax/Paralax'
import Sections from './components/Sections/Sections'
import './Home.scss'

export default function Home() {
    return (
        <div className='Home'>
            <Paralax/>
            <Sections/>
        </div>
    )
}
