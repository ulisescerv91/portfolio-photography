import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navigation.scss';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Navigation() {
    const [show,setShow] = useState(true);
    const pages = ['Homepage', 'Portfolio', 'Motion']
    const works = [ 'Comercial work', 'education', 'my presets', 'prints' ]
    return (
        <nav className='Navigation'>

                <div className='Navigation__shadow'></div>
                <div className='Navigation__character'>
                    <p>
                        Ulises Cervantes
                    </p>
                </div>
                <div className='Navigation__burgerMenu' onClick={ ()=> setShow(!show) }>X</div>
                <Fade when={!show} >
                    <div className='Navigation__links'>
                        <div className='Navigation__links___container'>
                            <div className="topFade"></div>
                            <div className="leftFade"></div>
                            <Zoom when={!show}  delay={300}>
                                <>
                                <ul className='Navigation__links___container__pages'>\
                                    {                            
                                        pages.map( (page,index) =>  
                                            <li key={index}>
                                                <Link>
                                                    {page}
                                                </Link>
                                            </li>                        
                                        )
                                    }
                                </ul>
                                <ul className='Navigation__links___container__work'>                        
                                    {
                                        works.map( (work, index) => 
                                            <li key={index}>
                                                <Link>
                                                    {work} <CallMadeIcon/>
                                                </Link>
                                            </li>
                                        )
                                    }

                                </ul>
                                </>
                            </Zoom>
                        </div>
                    </div>
                </Fade>
        </nav>
    )
}
