import { Parallax,ParallaxBanner } from 'react-scroll-parallax';
import './Paralax.scss'


export default function Paralax() {
    return (
        <div className='paralax'  >
                <div className='shadow'></div>
                <ParallaxBanner
                    className="paralax"
                    layers={[
                        {
                            children: (
                                <div
                                style={{
                                }}
                                className='test'
                                >
                                </div>
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
                            amount: 0,
                            expanded:false
                        },
                    ]}
                    style={{
                        height: '100vh',
                    }}
                >
                </ParallaxBanner> 
        </div>
    )
}
