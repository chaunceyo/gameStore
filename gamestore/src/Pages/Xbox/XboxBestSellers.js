import React, {useState} from 'react';
import './Xbox.css'

const XboxBestSellers = () => {
    const [isHovered, setIsHovered] = useState(false)
    return(
        <div>
            <div className='xboxConsole-section'>
                <h1>Best Sellers</h1>
            </div>

            <div className='xboxConsole-container'>
                <div className='xboxConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://m.media-amazon.com/images/I/81P8F64+ndL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>NBA 2K25</p>
                    <p>$39.99</p>

                    {isHovered && (
                        <div className='xboxGIF'>
                            <img 
                        src='https://assets.2k.com/1a6ngf98576c/7yZYOba3LzlVg1avmwojna/084f79ac806fbe2a38da69d1e142cdb7/NBA25_ALL_THE_CITY_REC_GIF_07_ENUS_NO_RATING_AGN_1216x684_FINAL.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>
                
                <div className='xboxConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdmuTIfP7YWN5virazuWh6cEcwz8ASSjs8B2LpxIVyVAwdx6_lI0Av77qOfPwSvoWvONaHP0G14crFJRwEMobnFRzIyGg7WYupeEwd22g&usqp=CAc'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Assassin's Creed: Shadows</p>
                    <p>$44.99</p>

                    {isHovered && (
                        <div className='xboxGIF'>
                            <img 
                        src='https://media2.giphy.com/media/JBzWx7tz59BXJ3w7Uw/giphy-downsized.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>

                <div className='xboxConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://m.media-amazon.com/images/I/81TOOo9I-CL._AC_UF894,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Street Fighter 6</p>
                    <p>$19.99</p>

                    {isHovered && (
                        <div className='xboxGIF'>
                            <img 
                        src='https://miro.medium.com/v2/resize:fit:1200/1*IJ0rJqoWZZ2NfV-IniTW5Q.gif'
                        alt='Description '
                        width='300'
                        height='300'></img>
                        </div>
                    )}
                </div>

                <div className='xboxConsole-items'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                    src='https://m.media-amazon.com/images/I/81EdS+mg9sL._AC_UF1000,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>WWE 2k24</p>
                    <p>$29.99</p>

                    {isHovered && (
                        <div className='xboxGIF'>
                            <img 
                        src='https://i.redd.it/yitcqrz8vap41.gif'
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

export default XboxBestSellers;