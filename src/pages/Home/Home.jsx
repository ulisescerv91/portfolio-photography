import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import Paralax from './components/Paralax/Paralax'
import Sections from './components/Sections/Sections'

import './Home.scss'

export default function Home() {
    return (
        <div className='Home'>
            <Paralax/>
            <Sections/>
            <AboutMe/>
            <Portfolio/>
        </div>
    )
}
