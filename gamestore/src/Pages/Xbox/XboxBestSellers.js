import React from 'react';
import './Xbox.css'

const XboxBestSellers = () => {
    return(
        <div>
            <div className='xboxConsole-section'>
                <h1>Best Sellers</h1>
            </div>

            <div className='xboxConsole-container'>
                <div className='xboxConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/81P8F64+ndL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>NBA 2K25</p>
                </div>
                
                <div className='xboxConsole-items'>
                    <img 
                    src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdmuTIfP7YWN5virazuWh6cEcwz8ASSjs8B2LpxIVyVAwdx6_lI0Av77qOfPwSvoWvONaHP0G14crFJRwEMobnFRzIyGg7WYupeEwd22g&usqp=CAc'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Assassin's Creed: Shadows</p>
                </div>

                <div className='xboxConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/81TOOo9I-CL._AC_UF894,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Street Fighter 6</p>
                </div>

                <div className='xboxConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/81EdS+mg9sL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>WWE 2k24</p>
                </div>
            </div>
        </div>
    )
}

export default XboxBestSellers;