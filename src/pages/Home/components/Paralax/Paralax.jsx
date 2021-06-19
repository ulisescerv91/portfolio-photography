import { ParallaxBanner } from 'react-scroll-parallax';
import './Paralax.scss'


export default function Paralax() {
    return (
        <div className='paralax'  >
                <div className='shadow'></div>
                <ParallaxBanner
                    layers={[
                        {
                            children: (
                                <div className='backGround'></div>
                            ),
                            amount: 0,
                            expanded: false
                        },
                        {
                            image: 'https://andyhardy.co/assets/img/landscape_andy.png',
                            amount: 0.3,
                            expanded:false
                        },
                        {
                            image: 'https://andyhardy.co/assets/img/landscape_mountain_small.png',
                            amount: -0.05,
                            expanded:false
                        },
                    ]}
                    style={{
                        height: '85vh',
                    }}
                >
                </ParallaxBanner> 
                <div className='paralax__data'>
                    <p>37.8136° S, 144.9631° E</p>
                    <p>Creating films in Melbourne / Byron Bay</p>
                </div>
        </div>
    )
}
