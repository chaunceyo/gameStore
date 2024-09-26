import React, {useState} from 'react';
import './Playstation.css'

const PSBestSellers = () => {
    const [isHovered, setIsHovered] = useState(false)
    return(
        <div>
            <div className='psConsole-section'>
                <h1>Best Sellers</h1>
            </div>

            <div className='psConsole-container'>
                <div className='psConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                        <img 
                        src='https://m.media-amazon.com/images/I/81WUPcfQ9OL._AC_UF1000,1000_QL80_.jpg'
                        alt="Description "
                        width='300'
                        height='300'></img>
                        <p>Marvel's Spiderman 2</p>
                        <p>$39.99</p>


                    {isHovered && (
                        <div className='psGIF'>
                            <img 
                        src='https://i.makeagif.com/media/10-12-2023/dDrfS7.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>
                
                <div className='psConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://gamebroslb.com/cdn/shop/products/image_53fd8473-3b4a-49ae-9501-369a9acf9abc.webp?v=1659994132'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Ghost of Tsushima: Director's Cut </p>
                    <p>$29.99</p>

                    {isHovered && (
                        <div className='psGIF'>
                            <img 
                        src='https://media.tenor.com/TCBvPlkAwC0AAAAM/ghost-of-tsushima-video-game.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>

                <div className='psConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://m.media-amazon.com/images/I/81h2WhI4dtL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Elden Ring</p>
                    <p>$39.99</p>

                    {isHovered && (
                        <div className='psGIF'>
                            <img 
                        src='https://i.makeagif.com/media/11-07-2021/s4K2Zt.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>

                <div className='psConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://m.media-amazon.com/images/I/81J6y4tm-WL._AC_UF894,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Call of Duty: Black Ops 6</p>
                    <p>$59.99</p>


                    {isHovered && (
                        <div className='psGIF'>
                            <img 
                        src='https://i.makeagif.com/media/3-15-2023/eg9CR4.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PSBestSellers;