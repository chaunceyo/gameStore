import React, {useState} from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import './Home.css'
import './GameItem.css'


const GameItem = ({game}) => {
    const [isHovered, setIsHovered] = useState(false)
    return(
            <div>
                <Link 
                    className="game-link" 
                    to={`/item/${game.name}`} 
                    key={game.id} 
                >   {/* Make each obj an item with a Link pointing to its item page (make Route for item page) */}
                     <div 
                        className='new-items'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                     >         
                        
                            <img 
                                src={game.imageUrl}
                                alt="Description "
                                width='300'
                                height='300'>
                            </img>
                            <p className="game-name">{game.name}</p>
                            <p className="game-price">${game.price}</p>

                            
                        {isHovered && (
                        <div className='gameGIF'>
                            <img 
                                src={game.gifUrl}
                                alt='Description '
                                width='300'
                                height='300'>
                            </img>
                        </div>
                        )}
                    </div>  
                </Link>
            </div>
    )
}

export default GameItem;