import React from "react";
import {Link, Routes, Route} from 'react-router-dom';
import './Home.css'


const GameItem = ({game}) => {
    return(
            <div>
                <Link to={`/item/${game.name}`} key={game.id} >   {/* Make each obj an item with a Link pointing to its item page (make Route for item page) */}
                                <div className='new-items'>         
                                    <img 
                                    src={game.imageUrl}
                                    alt="Description "
                                    width='300'
                                    height='300'></img>
                                    <p>{game.name}</p>
                                    <p>${game.price}</p>
                                </div>
                </Link>
                
            </div>
    )
}

export default GameItem;