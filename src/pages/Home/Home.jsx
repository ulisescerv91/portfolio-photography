import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Paralax from './components/Paralax/Paralax'
import Sections from './components/Sections/Sections'

import './Home.scss'

export default function Home() {
    return (
        <div className='Home'>
            <Paralax/>
            <Sections/>
            <AboutMe/>
        </div>
    )
}
