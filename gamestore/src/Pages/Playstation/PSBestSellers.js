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
                <div className='psConsole-items'>
                    <div className='psSpiderman' 
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
                        src='https://media.tenor.com/9ATcv6bNTawAAAAM/peter-venom.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                    </div>
                </div>
                
                <div className='psConsole-items'>
                    <img 
                    src='https://gamebroslb.com/cdn/shop/products/image_53fd8473-3b4a-49ae-9501-369a9acf9abc.webp?v=1659994132'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Ghost of Tsushima: Director's Cut </p>
                </div>

                <div className='psConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/81h2WhI4dtL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Elden Ring</p>
                </div>

                <div className='psConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/81J6y4tm-WL._AC_UF894,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Call of Duty: Black Ops 6</p>
                </div>
            </div>
        </div>
    )
}

export default PSBestSellers;