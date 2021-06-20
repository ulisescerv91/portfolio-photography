import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navigation.scss';

export default function Navigation() {
    const [show,setShow] = useState(true);
    return (
        <nav className='Navigation'>
            <div className='Navigation__shadow'></div>
            <div className='Navigation__character'>
                <p>
                    Ulises Cervantes
                </p>
            </div>
            <div className='Navigation__burgerMenu' onClick={ ()=> setShow(!show) }>X</div>
            <div className={` Navigation__links ${show ? 'hide': ''}`}>
                <div className='Navigation__links___container'>
                <div className="topFade"></div>
                <div className="leftFade"></div>
                    <ul className='Navigation__links___container__pages'>
                        <li>
                            <Link>
                                Homepage
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Motion
                            </Link>
                        </li>
                    </ul>
                    <ul className='Navigation__links___container__work'>
                        <li>
                            <Link>
                                Comercial work
                            </Link>
                        </li>
                        <li>
                            <Link>
                                education
                            </Link>
                        </li>
                        <li>
                            <Link>
                                my presets
                            </Link>
                        </li>
                        <li>
                            <Link>
                                print
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
