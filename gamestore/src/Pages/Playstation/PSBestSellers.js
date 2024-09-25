import React from 'react';
import './Playstation.css'

const PSBestSellers = () => {
    return(
        <div>
            <div className='psConsole-section'>
                <h1>Best Sellers</h1>
            </div>

            <div className='psConsole-container'>
                <div className='psConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/81WUPcfQ9OL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Marvel's Spiderman 2</p>
                </div>
                
                <div className='psConsole-items'>
                    <img 
                    src='https://products.eneba.games/resized-products/oTmXEq8cssvbEvwL3_69UVLd5a-ajU-uKP0gRC3LEqI_350x200_1x-0.jpeg'
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